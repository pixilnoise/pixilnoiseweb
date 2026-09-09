/* v75 — real-time WebGL score. No network, audio, video or dependencies. */
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  if (!hero) return;
  document.body.classList.add('mv-home');
  const stage = document.createElement('div');
  stage.className = 'mv-stage'; stage.setAttribute('aria-hidden', 'true');
  stage.innerHTML = '<div class="mv-art a"></div><canvas class="mv-canvas"></canvas>';
  document.body.prepend(stage);
  const canvas = stage.querySelector('canvas');
  const gl = canvas.getContext('webgl', {alpha:false,antialias:false,depth:false,powerPreference:'low-power'});
  if (!gl) { stage.classList.add('mv-fallback'); return; }
  const vertex = `attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`;
  const fragment = `
precision highp float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
uniform float progress;
uniform float lightMode;
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float box(vec3 p,vec3 b){vec3 q=abs(p)-b;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);}
float octa(vec3 p,float s){p=abs(p);return (p.x+p.y+p.z-s)*.57735027;}
vec2 scene(vec3 p){
 float phase=progress;
 vec3 q=p;
 q.xy=rot(q.z*.10+sin(time*.15)*.22+phase*.55)*q.xy;
 float travel=time*1.15+phase*9.;
 q.z=mod(q.z+travel,4.)-2.;
 // Solid bevel-like octagonal portals with narrow inlaid luminous edges.
 float a=atan(q.y,q.x);
 float sector=6.2831853/8.;
 float side=cos(mod(a+sector*.5,sector)-sector*.5)*length(q.xy);
 float gate=max(abs(side-(3.5+phase*.2))-.14,abs(q.z)-.24);
 float rail=max(abs(side-3.31)-.025,abs(q.z+.245)-.013);
 vec2 result=vec2(gate,1.);
 if(rail<result.x)result=vec2(rail,2.);
 // Offset monoliths form an architectural score around the flight path.
 vec3 b=p;
 b.z=mod(b.z+travel,6.)-3.;
 b.xy=rot(phase*.7)*b.xy;
 float slabs=box(vec3(abs(b.x)-4.35,b.y,b.z),vec3(.26,2.4,.7));
 if(slabs<result.x)result=vec2(slabs,1.);
 // Floating faceted core breaks into orbiting fragments as the page scrolls.
 vec3 c=p-vec3(.35,0.,6.8);
 c.xz=rot(time*.24+pointer.x*.45+phase)*c.xz;
 c.yz=rot(time*.17+pointer.y*.4)*c.yz;
 float core=octa(c,1.18-phase*.12);
 if(core<result.x)result=vec2(core,3.);
 for(int i=0;i<6;i++){
  float n=float(i),angle=n*1.04719755+time*.20;
  vec3 k=c-vec3(cos(angle),sin(angle),sin(angle*2.+time*.2)*.42)*(1.65+phase*.8);
  k.xy=rot(-angle-time*.15)*k.xy;
  float shard=octa(k,.36+sin(n*4.)*.09);
  if(shard<result.x)result=vec2(shard,3.);
 }
 return result;
}
vec3 normal(vec3 p){vec2 e=vec2(.003,0);return normalize(vec3(scene(p+e.xyy).x-scene(p-e.xyy).x,scene(p+e.yxy).x-scene(p-e.yxy).x,scene(p+e.yyx).x-scene(p-e.yyx).x));}
void main(){
 vec2 uv=(gl_FragCoord.xy*2.-resolution)/resolution.y;
 // Keep the focal object beside the identity, rather than behind its lettering.
 uv.x-=resolution.x/resolution.y*.30;
 vec3 ro=vec3(pointer.x*.42,sin(time*.13)*.15+pointer.y*.30,-3.+progress*.6);
 vec3 rd=normalize(vec3(uv,1.75));
 rd.xy=rot(sin(time*.11)*.075+progress*.17)*rd.xy;
 rd.xz=rot(pointer.x*.075)*rd.xz;
 rd.yz=rot(pointer.y*.05-progress*.045)*rd.yz;
 vec3 bg=mix(vec3(.012,.019,.034),vec3(.80,.85,.91),lightMode);
 vec3 col=bg;float d=0.;vec2 hit=vec2(0.);bool found=false;
 for(int i=0;i<72;i++){
  hit=scene(ro+rd*d);
  if(hit.x<.0035){found=true;break;}
  d+=max(hit.x*.8,.002);
  if(d>42.)break;
 }
 if(found){
  vec3 p=ro+rd*d,n=normal(p);
  vec3 key=normalize(vec3(-3.,5.,-4.));
  float diffuse=max(dot(n,key),0.);
  float spec=pow(max(dot(reflect(-key,n),-rd),0.),36.);
  float rim=pow(1.-max(dot(n,-rd),0.),3.);
  vec3 metal=mix(vec3(.14,.19,.26),vec3(.41,.48,.57),lightMode);
  if(hit.y>2.5)metal=mix(vec3(.36,.45,.57),vec3(.55,.63,.73),lightMode);
  col=metal*(.24+diffuse*.9)+spec*.55+vec3(.15,.23,.34)*rim;
  if(hit.y>1.5&&hit.y<2.5)col=mix(vec3(.45,.72,.84),vec3(.10,.32,.45),lightMode)*(.8+.2*sin(time*.7-p.z*.35));
  col=mix(col,bg,1.-exp(-d*.043));
 }
 float vignette=1.-min(length(uv)*.10,.32);
 col=mix(bg,col,vignette);
 gl_FragColor=vec4(col,1.);
}`;
  let program,buffer,uniforms;
  function setup(){
    function compile(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);throw Error('MV shader unavailable');}return s;}
    const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);
    program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('MV program unavailable');
    gl.useProgram(program);buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const attr=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
    uniforms={};['resolution','pointer','time','progress','lightMode'].forEach(k=>uniforms[k]=gl.getUniformLocation(program,k));
    stage.classList.remove('mv-fallback');
  }
  try{setup();}catch(_){stage.classList.add('mv-fallback');return;}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let raf=0,last=0,t=0,x=0,y=0,tx=0,ty=0,scroll=0,targetScroll=0,lost=false;
  function resize(){
    const w=innerWidth,h=innerHeight;
    // Cap fragment count: raymarching costs depend on pixels, not display DPI.
    const scale=Math.min(devicePixelRatio||1,w<700?.7:.9,Math.sqrt(950000/(w*h)));
    canvas.width=Math.max(1,Math.round(w*scale));canvas.height=Math.max(1,Math.round(h*scale));
    gl.viewport(0,0,canvas.width,canvas.height);draw();
  }
  function draw(){
    if(lost)return;
    gl.useProgram(program);gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);
    gl.uniform2f(uniforms.pointer,reduce.matches?0:x,reduce.matches?0:y);
    gl.uniform1f(uniforms.time,reduce.matches?4:t);
    gl.uniform1f(uniforms.progress,reduce.matches?0:scroll);
    gl.uniform1f(uniforms.lightMode,document.documentElement.dataset.theme==='light'?1:0);
    gl.drawArrays(gl.TRIANGLES,0,6);
  }
  function frame(now){
    raf=0;if(document.hidden||lost||reduce.matches){last=0;return;}
    if(!last||now-last>=33){const dt=last?Math.min((now-last)/1000,.1):0;last=now;t+=dt;
      const ease=1-Math.exp(-dt*4);x+=(tx-x)*ease;y+=(ty-y)*ease;scroll+=(targetScroll-scroll)*ease;
      draw();
    }
    raf=requestAnimationFrame(frame);
  }
  function sync(){cancelAnimationFrame(raf);raf=0;last=0;if(!document.hidden&&!lost&&!reduce.matches)raf=requestAnimationFrame(frame);else if(!lost)draw();}
  function onScroll(){targetScroll=Math.min(2.8,Math.max(0,window.scrollY/Math.max(innerHeight,1)));}
  window.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;tx=(e.clientX/innerWidth-.5)*2;ty=(.5-e.clientY/innerHeight)*2;},{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{tx=ty=0;});
  window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',resize,{passive:true});
  document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);
  new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;stage.classList.add('mv-fallback');sync();});
  canvas.addEventListener('webglcontextrestored',()=>{try{setup();lost=false;resize();sync();}catch(_){stage.classList.add('mv-fallback');}});
  window.addEventListener('pageshow',()=>{onScroll();sync();});
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);raf=0;});
  onScroll();resize();sync();
})();
