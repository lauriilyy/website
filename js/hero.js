var Sm=0,Mu=1,bm=2;var Kf=1,Em=2,wi=3,$i=0,wn=1,Ti=2;var qi=0,vs=1,wr=2,Su=3,bu=4,wm=5,yr=100,Tm=101,Am=102,Eu=103,wu=104,Cm=200,Rm=201,Pm=202,Lm=203,uc=204,fc=205,Im=206,Dm=207,Um=208,Nm=209,Om=210,Fm=211,Bm=212,zm=213,km=214,Vm=0,Hm=1,Gm=2,ma=3,Wm=4,Xm=5,Ym=6,qm=7,Qf=0,Zm=1,Jm=2,Zi=0,$m=1,Km=2,Qm=3,jm=4,tg=5,eg=6;var jf=300,Ss=301,bs=302,dc=303,pc=304,Fa=306,mc=1e3,ei=1001,gc=1002,fn=1003,Tu=1004;var Dl=1005;var Hn=1006,ng=1007;var ro=1008;var Ji=1009,ig=1010,rg=1011,Kc=1012,td=1013,Xi=1014,Yi=1015,so=1016,ed=1017,nd=1018,Sr=1020,sg=1021,ni=1023,og=1024,ag=1025,br=1026,Es=1027,lg=1028,id=1029,cg=1030,rd=1031,sd=1033,Ul=33776,Nl=33777,Ol=33778,Fl=33779,Au=35840,Cu=35841,Ru=35842,Pu=35843,od=36196,Lu=37492,Iu=37496,Du=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,Bu=37813,zu=37814,ku=37815,Vu=37816,Hu=37817,Gu=37818,Wu=37819,Xu=37820,Yu=37821,Bl=36492,qu=36494,Zu=36495,hg=36283,Ju=36284,$u=36285,Ku=36286;var ga=2300,_a=2301,zl=2302,Qu=2400,ju=2401,tf=2402;var ad=3e3,Er=3001,ug=3200,fg=3201,dg=0,pg=1,Gn="",qe="srgb",Ci="srgb-linear",Qc="display-p3",Ba="display-p3-linear",xa="linear",ve="srgb",va="rec709",ya="p3";var jr=7680;var ef=519,mg=512,gg=513,_g=514,ld=515,xg=516,vg=517,yg=518,Mg=519,nf=35044;var rf="300 es",_c=1035,Ai=2e3,Ma=2001,Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,xc=180/Math.PI;function ho(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function En(r,t,e){return Math.max(t,Math.min(e,r))}function Sg(r,t){return(r%t+t)%t}function Vl(r,t,e){return(1-e)*r+e*t}function sf(r){return(r&r-1)===0&&r!==0}function vc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ks(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var de=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],x=i[4],b=i[7],C=i[2],A=i[5],w=i[8];return s[0]=a*g+o*y+l*C,s[3]=a*m+o*x+l*A,s[6]=a*p+o*b+l*w,s[1]=c*g+h*y+f*C,s[4]=c*m+h*x+f*A,s[7]=c*p+h*b+f*w,s[2]=u*g+d*y+_*C,s[5]=u*m+d*x+_*A,s[8]=u*p+d*b+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,_=e*f+n*u+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new Qt;function cd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bg(){let r=Sa("canvas");return r.style.display="block",r}var of={};function no(r){r in of||(of[r]=!0,console.warn(r))}var af=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lf=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[Ci]:{transfer:xa,primaries:va,toReference:r=>r,fromReference:r=>r},[qe]:{transfer:ve,primaries:va,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ba]:{transfer:xa,primaries:ya,toReference:r=>r.applyMatrix3(lf),fromReference:r=>r.applyMatrix3(af)},[Qc]:{transfer:ve,primaries:ya,toReference:r=>r.convertSRGBToLinear().applyMatrix3(lf),fromReference:r=>r.applyMatrix3(af).convertLinearToSRGB()}},Eg=new Set([Ci,Ba]),fe={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Eg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Go[t].toReference,i=Go[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Go[r].primaries},getTransfer:function(r){return r===Gn?xa:Go[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ts,ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Sa("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wg=0,Ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ho(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wl(i[a].image)):s.push(Wl(i[a]))}else s=Wl(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Wl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ba.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tg=0,ri=class r extends Ki{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ei,i=ei,s=Hn,a=ro,o=ni,l=Ji,c=r.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ho(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Er?qe:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mc:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mc:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Er:ad}set encoding(t){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Er?qe:Gn}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=jf;ri.DEFAULT_ANISOTROPY=1;var Ze=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,b=(d+1)/2,C=(p+1)/2,A=(h+u)/4,w=(f+g)/4,I=(_+m)/4;return x>b&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=w/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?qe:Gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ri(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wa=class extends ri{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mc=class extends ri{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==u||c!==d||h!==_){let m=1-o,p=l*u+c*d+h*_+f*g,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),A=Math.atan2(C,p*y);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let b=o*y;if(l=l*m+u*b,c=c*m+d*b,h=h*m+_*b,f=f*m+g*b,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*f+l*d-c*u,t[e+1]=l*_+h*u+c*f-o*d,t[e+2]=c*_+h*d+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),u=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=i+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xl=new k,cf=new Qi,Tr=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Xo.subVectors(this.max,Qs),es.subVectors(t.a,Qs),ns.subVectors(t.b,Qs),is.subVectors(t.c,Qs),ki.subVectors(ns,es),Vi.subVectors(is,ns),mr.subVectors(es,is);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-mr.z,mr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,mr.z,0,-mr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-mr.y,mr.x,0];return!Yl(e,es,ns,is,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,es,ns,is,Xo))?!1:(Yo.crossVectors(ki,Vi),e=[Yo.x,Yo.y,Yo.z],Yl(e,es,ns,is,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yi=[new k,new k,new k,new k,new k,new k,new k,new k],Kn=new k,Wo=new Tr,es=new k,ns=new k,is=new k,ki=new k,Vi=new k,mr=new k,Qs=new k,Xo=new k,Yo=new k,gr=new k;function Yl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gr.fromArray(r,s);let o=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),l=t.dot(gr),c=e.dot(gr),h=n.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ag=new Tr,js=new k,ql=new k,Ar=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ag.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(ql)),this.expandByPoint(js.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mi=new k,Zl=new k,qo=new k,Hi=new k,Jl=new k,Zo=new k,$l=new k,ws=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zl.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(Zl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(qo),o=Hi.dot(this.direction),l=-Hi.dot(qo),c=Hi.lengthSq(),h=Math.abs(1-a*a),f,u,d,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){let g=1/h;f*=g,u*=g,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zl).addScaledVector(qo,u),d}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,s){Jl.subVectors(e,t),Zo.subVectors(n,t),$l.crossVectors(Jl,Zo);let a=this.direction.dot($l),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,t);let l=o*this.direction.dot(Zo.crossVectors(Hi,Zo));if(l<0)return null;let c=o*this.direction.dot(Jl.cross(Hi));if(c<0||l+c>a)return null;let h=-o*Hi.dot($l);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class r{constructor(t,e,n,i,s,a,o,l,c,h,f,u,d,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,f,u,d,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,f,u,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),s=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=a*h,d=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u-g*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+_,e[10]=u-g*f}else if(t.order==="XZY"){let u=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=a*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Rg)}lookAt(t,e,n){let i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Gi.crossVectors(n,In),Gi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Gi.crossVectors(n,In)),Gi.normalize(),Jo.crossVectors(In,Gi),i[0]=Gi.x,i[4]=Jo.x,i[8]=In.x,i[1]=Gi.y,i[5]=Jo.y,i[9]=In.y,i[2]=Gi.z,i[6]=Jo.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],C=n[15],A=i[0],w=i[4],I=i[8],v=i[12],M=i[1],O=i[5],N=i[9],tt=i[13],L=i[2],D=i[6],H=i[10],X=i[14],q=i[3],Y=i[7],R=i[11],Q=i[15];return s[0]=a*A+o*M+l*L+c*q,s[4]=a*w+o*O+l*D+c*Y,s[8]=a*I+o*N+l*H+c*R,s[12]=a*v+o*tt+l*X+c*Q,s[1]=h*A+f*M+u*L+d*q,s[5]=h*w+f*O+u*D+d*Y,s[9]=h*I+f*N+u*H+d*R,s[13]=h*v+f*tt+u*X+d*Q,s[2]=_*A+g*M+m*L+p*q,s[6]=_*w+g*O+m*D+p*Y,s[10]=_*I+g*N+m*H+p*R,s[14]=_*v+g*tt+m*X+p*Q,s[3]=y*A+x*M+b*L+C*q,s[7]=y*w+x*O+b*D+C*Y,s[11]=y*I+x*N+b*H+C*R,s[15]=y*v+x*tt+b*X+C*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*o*u+n*c*u+i*o*d-n*l*d)+g*(+e*l*d-e*c*u+s*a*u-i*a*d+i*c*h-s*l*h)+m*(+e*c*f-e*o*d-s*a*f+n*a*d+s*o*h-n*c*h)+p*(-i*o*h-e*l*f+e*o*u+i*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=f*m*c-g*u*c+g*l*d-o*m*d-f*l*p+o*u*p,x=_*u*c-h*m*c-_*l*d+a*m*d+h*l*p-a*u*p,b=h*g*c-_*f*c+_*o*d-a*g*d-h*o*p+a*f*p,C=_*f*l-h*g*l-_*o*u+a*g*u+h*o*m-a*f*m,A=e*y+n*x+i*b+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=y*w,t[1]=(g*u*s-f*m*s-g*i*d+n*m*d+f*i*p-n*u*p)*w,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(f*l*s-o*u*s-f*i*c+n*u*c+o*i*d-n*l*d)*w,t[4]=x*w,t[5]=(h*m*s-_*u*s+_*i*d-e*m*d-h*i*p+e*u*p)*w,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*d+e*l*d)*w,t[8]=b*w,t[9]=(_*f*s-h*g*s-_*n*d+e*g*d+h*n*p-e*f*p)*w,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*f*s-h*n*c+e*f*c+a*n*d-e*o*d)*w,t[12]=C*w,t[13]=(h*g*i-_*f*i+_*n*u-e*g*u-h*n*m+e*f*m)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*u+e*o*u)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,_=s*f,g=a*h,m=a*f,p=o*f,y=l*c,x=l*h,b=l*f,C=n.x,A=n.y,w=n.z;return i[0]=(1-(g+p))*C,i[1]=(d+b)*C,i[2]=(_-x)*C,i[3]=0,i[4]=(d-b)*A,i[5]=(1-(u+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(_+x)*w,i[9]=(m-y)*w,i[10]=(1-(u+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=rs.set(i[0],i[1],i[2]).length(),a=rs.set(i[4],i[5],i[6]).length(),o=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);let c=1/s,h=1/a,f=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,e.setFromRotationMatrix(Qn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ai){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,_;if(o===Ai)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ma)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ai){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-s),u=(e+t)*c,d=(n+i)*h,_,g;if(o===Ai)_=(a+s)*f,g=-2*f;else if(o===Ma)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new k,Qn=new Ge,Cg=new k(0,0,0),Rg=new k(1,1,1),Gi=new k,Jo=new k,In=new k,hf=new Ge,uf=new Qi,Ta=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uf.setFromEuler(this),this.setFromQuaternion(uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ta.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pg=0,ff=new k,ss=new Qi,Si=new Ge,$o=new k,to=new k,Lg=new k,Ig=new Qi,df=new k(1,0,0),pf=new k(0,1,0),mf=new k(0,0,1),Dg={type:"added"},Ug={type:"removed"},Un=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,e=new Ta,n=new Qi,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Qt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(df,t)}rotateY(t){return this.rotateOnAxis(pf,t)}rotateZ(t){return this.rotateOnAxis(mf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(df,t)}translateY(t){return this.translateOnAxis(pf,t)}translateZ(t){return this.translateOnAxis(mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$o.copy(t):$o.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(to,$o,this.up):Si.lookAt($o,to,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Si),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ug)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Lg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Un.DEFAULT_UP=new k(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new k,bi=new k,Kl=new k,Ei=new k,os=new k,as=new k,gf=new k,Ql=new k,jl=new k,tc=new k,Ko=!1,ms=class r{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){jn.subVectors(i,e),bi.subVectors(n,e),Kl.subVectors(t,e);let a=jn.dot(jn),o=jn.dot(bi),l=jn.dot(Kl),c=bi.dot(bi),h=bi.dot(Kl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(t,e,n,i,s,a,o,l){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),bi.subVectors(t,e),jn.cross(bi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),jn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;os.subVectors(i,n),as.subVectors(s,n),Ql.subVectors(t,n);let l=os.dot(Ql),c=as.dot(Ql);if(l<=0&&c<=0)return e.copy(n);jl.subVectors(t,i);let h=os.dot(jl),f=as.dot(jl);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);tc.subVectors(t,s);let d=os.dot(tc),_=as.dot(tc);if(_>=0&&d<=_)return e.copy(s);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(as,o);let m=h*_-d*f;if(m<=0&&f-h>=0&&d-_>=0)return gf.subVectors(s,i),o=(f-h)/(f-h+(d-_)),e.copy(i).addScaledVector(gf,o);let p=1/(m+g+u);return a=g*p,o=u*p,e.copy(n).addScaledVector(os,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function ec(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=Sg(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ec(a,s,t+1/3),this.g=ec(a,s,t),this.b=ec(a,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Gl(t.r),this.g=Gl(t.g),this.b=Gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return fe.fromWorkingColorSpace(en.copy(this),t),Math.round(En(en.r*255,0,255))*65536+Math.round(En(en.g*255,0,255))*256+Math.round(En(en.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(en.copy(this),e);let n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=qe){fe.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Qo);let n=Vl(Wi.h,Qo.h,e),i=Vl(Wi.s,Qo.s,e),s=Vl(Wi.l,Qo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new ie;ie.NAMES=hd;var Ng=0,ji=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=vs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=fc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Aa=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new k,jo=new de,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),i=bn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nf&&(t.usage=this.usage),t}};var Ca=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ra=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ii=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Og=0,Vn=new Ge,nc=new Un,ls=new k,Dn=new Tr,eo=new Tr,He=new k,Je=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?Ra:Ca)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ii(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(Dn.min,eo.min),Dn.expandByPoint(He),He.addVectors(Dn.max,eo.max),Dn.expandByPoint(He)):(Dn.expandByPoint(eo.min),Dn.expandByPoint(eo.max))}Dn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),He.add(ls)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new k,h[M]=new k;let f=new k,u=new k,d=new k,_=new de,g=new de,m=new de,p=new k,y=new k;function x(M,O,N){f.fromArray(i,M*3),u.fromArray(i,O*3),d.fromArray(i,N*3),_.fromArray(a,M*2),g.fromArray(a,O*2),m.fromArray(a,N*2),u.sub(f),d.sub(f),g.sub(_),m.sub(_);let tt=1/(g.x*m.y-m.x*g.y);isFinite(tt)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(tt),y.copy(d).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(tt),c[M].add(p),c[O].add(p),c[N].add(p),h[M].add(y),h[O].add(y),h[N].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let M=0,O=b.length;M<O;++M){let N=b[M],tt=N.start,L=N.count;for(let D=tt,H=tt+L;D<H;D+=3)x(n[D+0],n[D+1],n[D+2])}let C=new k,A=new k,w=new k,I=new k;function v(M){w.fromArray(s,M*3),I.copy(w);let O=c[M];C.copy(O),C.sub(w.multiplyScalar(w.dot(O))).normalize(),A.crossVectors(I,O);let tt=A.dot(h[M])<0?-1:1;l[M*4]=C.x,l[M*4+1]=C.y,l[M*4+2]=C.z,l[M*4+3]=tt}for(let M=0,O=b.length;M<O;++M){let N=b[M],tt=N.start,L=N.count;for(let D=tt,H=tt+L;D<H;D+=3)v(n[D+0]),v(n[D+1]),v(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[d++]}return new ae(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_f=new Ge,_r=new ws,ta=new Ar,xf=new k,cs=new k,hs=new k,us=new k,ic=new k,ea=new k,na=new de,ia=new de,ra=new de,vf=new k,yf=new k,Mf=new k,sa=new k,oa=new k,fi=class extends Un{constructor(t=new Je,e=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(ic.fromBufferAttribute(f,t),a?ea.addScaledVector(ic,h):ea.addScaledVector(ic.sub(e),h))}e.add(ea)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),_r.copy(t.ray).recast(t.near),!(ta.containsPoint(_r.origin)===!1&&(_r.intersectSphere(ta,xf)===null||_r.origin.distanceToSquared(xf)>(t.far-t.near)**2))&&(_f.copy(s).invert(),_r.copy(t.ray).applyMatrix4(_f),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_r)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=x;b<C;b+=3){let A=o.getX(b),w=o.getX(b+1),I=o.getX(b+2);i=aa(this,p,t,n,c,h,f,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);i=aa(this,a,t,n,c,h,f,y,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=x;b<C;b+=3){let A=b,w=b+1,I=b+2;i=aa(this,p,t,n,c,h,f,A,w,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=m,x=m+1,b=m+2;i=aa(this,a,t,n,c,h,f,y,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Fg(r,t,e,n,i,s,a,o){let l;if(t.side===wn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===$i,o),l===null)return null;oa.copy(o),oa.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:r}}function aa(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,cs),r.getVertexPosition(l,hs),r.getVertexPosition(c,us);let h=Fg(r,t,e,n,cs,hs,us,sa);if(h){i&&(na.fromBufferAttribute(i,o),ia.fromBufferAttribute(i,l),ra.fromBufferAttribute(i,c),h.uv=ms.getInterpolation(sa,cs,hs,us,na,ia,ra,new de)),s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),ra.fromBufferAttribute(s,c),h.uv1=ms.getInterpolation(sa,cs,hs,us,na,ia,ra,new de),h.uv2=h.uv1),a&&(vf.fromBufferAttribute(a,o),yf.fromBufferAttribute(a,l),Mf.fromBufferAttribute(a,c),h.normal=ms.getInterpolation(sa,cs,hs,us,vf,yf,Mf,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};ms.getNormal(cs,hs,us,f.normal),h.face=f}return h}var ao=class r extends Je{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(h,3)),this.setAttribute("uv",new ii(f,2));function _(g,m,p,y,x,b,C,A,w,I,v){let M=b/w,O=C/I,N=b/2,tt=C/2,L=A/2,D=w+1,H=I+1,X=0,q=0,Y=new k;for(let R=0;R<H;R++){let Q=R*O-tt;for(let lt=0;lt<D;lt++){let J=lt*M-N;Y[g]=J*y,Y[m]=Q*x,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(lt/w),f.push(1-R/I),X+=1}}for(let R=0;R<I;R++)for(let Q=0;Q<w;Q++){let lt=u+Q+D*R,J=u+Q+D*(R+1),K=u+(Q+1)+D*(R+1),at=u+(Q+1)+D*R;l.push(lt,J,at),l.push(J,K,at),q+=6}o.addGroup(d,q,v),d+=q,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(r){let t={};for(let e=0;e<r.length;e++){let n=Ts(r[e]);for(let i in n)t[i]=n[i]}return t}function Bg(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ud(r){return r.getRenderTarget()===null?r.outputColorSpace:fe.workingColorSpace}var zg={clone:Ts,merge:un},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pa=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=class extends Pa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,Sc=class extends Un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(fs,ds,t,e);i.layers=this.layers,this.add(i);let s=new dn(fs,ds,t,e);s.layers=this.layers,this.add(s);let a=new dn(fs,ds,t,e);a.layers=this.layers,this.add(a);let o=new dn(fs,ds,t,e);o.layers=this.layers,this.add(o);let l=new dn(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new dn(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},La=class extends ri{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bc=class extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Er?qe:Gn),this.texture=new La(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ao(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:qi});s.uniforms.tEquirect.value=e;let a=new fi(i,s),o=e.minFilter;return e.minFilter===ro&&(e.minFilter=Hn),new Sc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},rc=new k,Hg=new k,Gg=new Qt,ti=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rc.subVectors(n,e).cross(Hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gg.getNormalMatrix(t),i=this.coplanarPoint(rc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new Ar,la=new k,Ia=class{constructor(t=new ti,e=new ti,n=new ti,i=new ti,s=new ti,a=new ti){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-s,u-c,m-d,b-p).normalize(),n[1].setComponents(l+s,u+c,m+d,b+p).normalize(),n[2].setComponents(l+a,u+h,m+_,b+y).normalize(),n[3].setComponents(l-a,u-h,m-_,b-y).normalize(),n[4].setComponents(l-o,u-f,m-g,b-x).normalize(),e===Ai)n[5].setComponents(l+o,u+f,m+g,b+x).normalize();else if(e===Ma)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(la.x=i.normal.x>0?t.max.x:t.min.x,la.y=i.normal.y>0?t.max.y:t.min.y,la.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wg(r,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let f=c.array,u=c.usage,d=f.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,f,u),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,f){let u=h.array,d=h._updateRange,_=h.updateRanges;if(r.bindBuffer(f,c),d.count===-1&&_.length===0&&r.bufferSubData(f,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){let p=_[g];e?r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Ec=class r extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*u-a;for(let x=0;x<c;x++){let b=x*f-s;_.push(b,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,b=y+c*(p+1),C=y+1+c*(p+1),A=y+1+c*p;d.push(x,b,A),d.push(b,C,A)}this.setIndex(d),this.setAttribute("position",new ii(_,3)),this.setAttribute("normal",new ii(g,3)),this.setAttribute("uv",new ii(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,o0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Xg,alphahash_pars_fragment:Yg,alphamap_fragment:qg,alphamap_pars_fragment:Zg,alphatest_fragment:Jg,alphatest_pars_fragment:$g,aomap_fragment:Kg,aomap_pars_fragment:Qg,batching_pars_vertex:jg,batching_vertex:t_,begin_vertex:e_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:s_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:h_,color_pars_fragment:u_,color_pars_vertex:f_,color_vertex:d_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:x_,emissivemap_fragment:v_,emissivemap_pars_fragment:y_,colorspace_fragment:M_,colorspace_pars_fragment:S_,envmap_fragment:b_,envmap_common_pars_fragment:E_,envmap_pars_fragment:w_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:B_,envmap_vertex:A_,fog_vertex:C_,fog_pars_vertex:R_,fog_fragment:P_,fog_pars_fragment:L_,gradientmap_pars_fragment:I_,lightmap_fragment:D_,lightmap_pars_fragment:U_,lights_lambert_fragment:N_,lights_lambert_pars_fragment:O_,lights_pars_begin:F_,lights_toon_fragment:z_,lights_toon_pars_fragment:k_,lights_phong_fragment:V_,lights_phong_pars_fragment:H_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:Y_,lights_fragment_end:q_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:K_,map_fragment:Q_,map_pars_fragment:j_,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphcolor_vertex:r0,morphnormal_vertex:s0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:C0,shadowmask_pars_fragment:R0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:I0,skinnormal_vertex:D0,specularmap_fragment:U0,specularmap_pars_fragment:N0,tonemapping_fragment:O0,tonemapping_pars_fragment:F0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:H0,worldpos_vertex:G0,background_vert:W0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:q0,cube_vert:Z0,cube_frag:J0,depth_vert:$0,depth_frag:K0,distanceRGBA_vert:Q0,distanceRGBA_frag:j0,equirect_vert:tx,equirect_frag:ex,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:rx,meshbasic_frag:sx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:fx,meshphong_frag:dx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:_x,points_vert:xx,points_frag:vx,shadow_vert:yx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:bx},_t={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ui={basic:{uniforms:un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ie(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:un([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:un([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ie(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:un([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:un([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:un([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:un([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:un([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:un([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:un([_t.common,_t.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:un([_t.lights,_t.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ui.physical={uniforms:un([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var ca={r:0,b:0,g:0};function Ex(r,t,e,n,i,s,a){let o=new ie(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function _(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Fa)?(h===void 0&&(h=new fi(new ao(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ts(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=fe.getTransfer(x.colorSpace)!==ve,(f!==x||u!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fi(new Ec(2,2),new si({name:"BackgroundMaterial",uniforms:Ts(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=fe.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(ca,ud(r)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function wx(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function f(L,D,H,X,q){let Y=!1;if(a){let R=g(X,H,D);c!==R&&(c=R,d(c.object)),Y=p(L,X,H,q),Y&&y(L,X,H,q)}else{let R=D.wireframe===!0;(c.geometry!==X.id||c.program!==H.id||c.wireframe!==R)&&(c.geometry=X.id,c.program=H.id,c.wireframe=R,Y=!0)}q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(L,D,H,X),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,D,H){let X=H.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let Y=q[D.id];Y===void 0&&(Y={},q[D.id]=Y);let R=Y[X];return R===void 0&&(R=m(u()),Y[X]=R),R}function m(L){let D=[],H=[],X=[];for(let q=0;q<i;q++)D[q]=0,H[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:X,object:L,attributes:{},index:null}}function p(L,D,H,X){let q=c.attributes,Y=D.attributes,R=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let K=q[lt],at=Y[lt];if(at===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),K===void 0||K.attribute!==at||at&&K.data!==at.data)return!0;R++}return c.attributesNum!==R||c.index!==X}function y(L,D,H,X){let q={},Y=D.attributes,R=0,Q=H.getAttributes();for(let lt in Q)if(Q[lt].location>=0){let K=Y[lt];K===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let at={};at.attribute=K,K&&K.data&&(at.data=K.data),q[lt]=at,R++}c.attributes=q,c.attributesNum=R,c.index=X}function x(){let L=c.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function b(L){C(L,0)}function C(L,D){let H=c.newAttributes,X=c.enabledAttributes,q=c.attributeDivisors;H[L]=1,X[L]===0&&(r.enableVertexAttribArray(L),X[L]=1),q[L]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),q[L]=D)}function A(){let L=c.newAttributes,D=c.enabledAttributes;for(let H=0,X=D.length;H<X;H++)D[H]!==L[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function w(L,D,H,X,q,Y,R){R===!0?r.vertexAttribIPointer(L,D,H,q,Y):r.vertexAttribPointer(L,D,H,X,q,Y)}function I(L,D,H,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=X.attributes,Y=H.getAttributes(),R=D.defaultAttributeValues;for(let Q in Y){let lt=Y[Q];if(lt.location>=0){let J=q[Q];if(J===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let K=J.normalized,at=J.itemSize,yt=e.get(J);if(yt===void 0)continue;let mt=yt.buffer,Pt=yt.type,bt=yt.bytesPerElement,Dt=n.isWebGL2===!0&&(Pt===r.INT||Pt===r.UNSIGNED_INT||J.gpuType===td);if(J.isInterleavedBufferAttribute){let Mt=J.data,F=Mt.stride,Gt=J.offset;if(Mt.isInstancedInterleavedBuffer){for(let vt=0;vt<lt.locationSize;vt++)C(lt.location+vt,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<lt.locationSize;vt++)b(lt.location+vt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let vt=0;vt<lt.locationSize;vt++)w(lt.location+vt,at/lt.locationSize,Pt,K,F*bt,(Gt+at/lt.locationSize*vt)*bt,Dt)}else{if(J.isInstancedBufferAttribute){for(let Mt=0;Mt<lt.locationSize;Mt++)C(lt.location+Mt,J.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Mt=0;Mt<lt.locationSize;Mt++)b(lt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Mt=0;Mt<lt.locationSize;Mt++)w(lt.location+Mt,at/lt.locationSize,Pt,K,at*bt,at/lt.locationSize*Mt*bt,Dt)}}else if(R!==void 0){let K=R[Q];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(lt.location,K);break;case 3:r.vertexAttrib3fv(lt.location,K);break;case 4:r.vertexAttrib4fv(lt.location,K);break;default:r.vertexAttrib1fv(lt.location,K)}}}}A()}function v(){N();for(let L in o){let D=o[L];for(let H in D){let X=D[H];for(let q in X)_(X[q].object),delete X[q];delete D[H]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;let D=o[L.id];for(let H in D){let X=D[H];for(let q in X)_(X[q].object),delete X[q];delete D[H]}delete o[L.id]}function O(L){for(let D in o){let H=o[D];if(H[L.id]===void 0)continue;let X=H[L.id];for(let q in X)_(X[q].object),delete X[q];delete H[L.id]}}function N(){tt(),h=!0,c!==l&&(c=l,d(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function Tx(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,f){r.drawArrays(s,h,f),e.update(f,s,1)}function l(h,f,u){if(u===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,h,f,u),e.update(f,s,u)}function c(h,f,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<u;_++)this.render(h[_],f[_]);else{d.multiDrawArraysWEBGL(s,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=f[g];e.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ax(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,b=a||t.has("OES_texture_float"),C=x&&b,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:A}}function Cx(r){let t=this,e=null,n=0,i=!1,s=!1,a=new ti,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,x=y*4,b=p.clippingState||null;l.value=b,b=h(_,u,x,d);for(let C=0;C!==x;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=d;x!==g;++x,b+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Rx(r){let t=new WeakMap;function e(a,o){return o===dc?a.mapping=Ss:o===pc&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dc||o===pc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bc(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var wc=class extends Pa{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Sf=[.125,.215,.35,.446,.526,.582],Mr=20,sc=new wc,bf=new ie,oc=null,ac=0,lc=0,vr=(1+Math.sqrt(5))/2,ps=1/vr,Ef=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,vr,ps),new k(0,vr,-ps),new k(ps,0,vr),new k(-ps,0,vr),new k(vr,ps,0),new k(-vr,ps,0)],Da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oc,ac,lc),t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:so,format:ni,colorSpace:Ci,depthBuffer:!1},i=wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Px(s)),this._blurMaterial=Lx(s,t,e)}return i}_compileMaterial(t){let e=new fi(this._lodPlanes[0],t);this._renderer.compile(e,sc)}_sceneToCubeUV(t,e,n,i){let o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(bf),h.toneMapping=Zi,h.autoClear=!1;let d=new Aa({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new fi(new ao,d),g=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(bf),g=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;ha(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ss||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ef[(i-1)%Ef.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new fi(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);let p=[],y=0;for(let w=0;w<Mr;++w){let I=w/g,v=Math.exp(-I*I/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-n;let b=this._sizeLods[i],C=3*b*(i>x-gs?i-x+gs:0),A=4*(this._cubeSize-b);ha(e,C,A,3*b,2*b),l.setRenderTarget(e),l.render(f,sc)}};function Px(r){let t=[],e=[],n=[],i=r,s=r-gs+1+Sf.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gs?l=Sf[a-r+gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),x=new Float32Array(m*_*d),b=new Float32Array(p*_*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,I=A>2?0:-1,v=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(v,g*_*A),x.set(u,m*_*A);let M=[A,A,A,A,A,A];b.set(M,p*_*A)}let C=new Je;C.setAttribute("position",new ae(y,g)),C.setAttribute("uv",new ae(x,m)),C.setAttribute("faceIndex",new ae(b,p)),t.push(C),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wf(r,t,e){let n=new Ri(r,t,e);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Lx(r,t,e){let n=new Float32Array(Mr),i=new k(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Tf(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Af(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ix(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===dc||l===pc,h=l===Ss||l===bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Da(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&i(f)){e===null&&(e=new Da(r));let u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dx(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ux(r,t,e,n){let i={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,_=f.attributes.position,g=0;if(d!==null){let y=d.array;g=d.version;for(let x=0,b=y.length;x<b;x+=3){let C=y[x+0],A=y[x+1],w=y[x+2];u.push(C,A,A,w,w,C)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let C=x+0,A=x+1,w=x+2;u.push(C,A,A,w,w,C)}}else return;let m=new(cd(u)?Ra:Ca)(u,1);m.version=g;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Nx(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,_){r.drawElements(s,_,o,d*l),e.update(_,s,1)}function f(d,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,o,d*l,g),e.update(_,s,g)}function u(d,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(d[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let p=0;for(let y=0;y<g;y++)p+=_[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function Ox(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fx(r,t){return r[0]-t[0]}function Bx(r,t){return Math.abs(t[1])-Math.abs(r[1])}function zx(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=d!==void 0?d.length:0,g=s.get(h);if(g===void 0||g.count!==_){let L=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],I=0;y===!0&&(I=1),x===!0&&(I=2),b===!0&&(I=3);let v=h.attributes.position.count*I,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let O=new Float32Array(v*M*4*_),N=new wa(O,v,M,_);N.type=Yi,N.needsUpdate=!0;let tt=I*4;for(let D=0;D<_;D++){let H=C[D],X=A[D],q=w[D],Y=v*M*4*D;for(let R=0;R<H.count;R++){let Q=R*tt;y===!0&&(a.fromBufferAttribute(H,R),O[Y+Q+0]=a.x,O[Y+Q+1]=a.y,O[Y+Q+2]=a.z,O[Y+Q+3]=0),x===!0&&(a.fromBufferAttribute(X,R),O[Y+Q+4]=a.x,O[Y+Q+5]=a.y,O[Y+Q+6]=a.z,O[Y+Q+7]=0),b===!0&&(a.fromBufferAttribute(q,R),O[Y+Q+8]=a.x,O[Y+Q+9]=a.y,O[Y+Q+10]=a.z,O[Y+Q+11]=q.itemSize===4?a.w:1)}}g={count:_,texture:N,size:new de(v,M)},s.set(h,g),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<u.length;y++)m+=u[y];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",p),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let d=u===void 0?0:u.length,_=n[h.id];if(_===void 0||_.length!==d){_=[];for(let x=0;x<d;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<d;x++){let b=_[x];b[0]=x,b[1]=u[x]}_.sort(Bx);for(let x=0;x<8;x++)x<d&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Fx);let g=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let b=o[x],C=b[0],A=b[1];C!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+x)!==g[C]&&h.setAttribute("morphTarget"+x,g[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),i[x]=A,p+=A):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function kx(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Ua=class extends ri{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:br,h!==br&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===br&&(n=Xi),n===void 0&&h===Es&&(n=Sr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dd=new ri,pd=new Ua(1,1);pd.compareFunction=ld;var md=new wa,gd=new Mc,_d=new La,Cf=[],Rf=[],Pf=new Float32Array(16),Lf=new Float32Array(9),If=new Float32Array(4);function Rs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Cf[i];if(s===void 0&&(s=new Float32Array(i),Cf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function za(r,t){let e=Rf[t];e===void 0&&(e=new Int32Array(t),Rf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Vx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Hx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2fv(this.addr,t),ze(e,t)}}function Gx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;r.uniform3fv(this.addr,t),ze(e,t)}}function Wx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4fv(this.addr,t),ze(e,t)}}function Xx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;If.set(n),r.uniformMatrix2fv(this.addr,!1,If),ze(e,n)}}function Yx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Lf.set(n),r.uniformMatrix3fv(this.addr,!1,Lf),ze(e,n)}}function qx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Pf.set(n),r.uniformMatrix4fv(this.addr,!1,Pf),ze(e,n)}}function Zx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Jx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2iv(this.addr,t),ze(e,t)}}function $x(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3iv(this.addr,t),ze(e,t)}}function Kx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4iv(this.addr,t),ze(e,t)}}function Qx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2uiv(this.addr,t),ze(e,t)}}function tv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3uiv(this.addr,t),ze(e,t)}}function ev(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4uiv(this.addr,t),ze(e,t)}}function nv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?pd:dd;e.setTexture2D(t||s,i)}function iv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gd,i)}function rv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_d,i)}function sv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||md,i)}function ov(r){switch(r){case 5126:return Vx;case 35664:return Hx;case 35665:return Gx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return qx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return $x;case 35669:case 35673:return Kx;case 5125:return Qx;case 36294:return jx;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function av(r,t){r.uniform1fv(this.addr,t)}function lv(r,t){let e=Rs(t,this.size,2);r.uniform2fv(this.addr,e)}function cv(r,t){let e=Rs(t,this.size,3);r.uniform3fv(this.addr,e)}function hv(r,t){let e=Rs(t,this.size,4);r.uniform4fv(this.addr,e)}function uv(r,t){let e=Rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function fv(r,t){let e=Rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function dv(r,t){let e=Rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function pv(r,t){r.uniform1iv(this.addr,t)}function mv(r,t){r.uniform2iv(this.addr,t)}function gv(r,t){r.uniform3iv(this.addr,t)}function _v(r,t){r.uniform4iv(this.addr,t)}function xv(r,t){r.uniform1uiv(this.addr,t)}function vv(r,t){r.uniform2uiv(this.addr,t)}function yv(r,t){r.uniform3uiv(this.addr,t)}function Mv(r,t){r.uniform4uiv(this.addr,t)}function Sv(r,t,e){let n=this.cache,i=t.length,s=za(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||dd,s[a])}function bv(r,t,e){let n=this.cache,i=t.length,s=za(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gd,s[a])}function Ev(r,t,e){let n=this.cache,i=t.length,s=za(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_d,s[a])}function wv(r,t,e){let n=this.cache,i=t.length,s=za(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),ze(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||md,s[a])}function Tv(r){switch(r){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return xv;case 36294:return vv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return wv}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}},Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tv(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function Df(r,t){r.seq.push(t),r.map[t.id]=t}function Av(r,t,e){let n=r.name,i=n.length;for(cc.lastIndex=0;;){let s=cc.exec(n),a=cc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Df(e,c===void 0?new Tc(o,r,t):new Ac(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new Cc(o),Df(e,f)),e=f}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Av(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Uf(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Cv=37297,Rv=0;function Pv(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Lv(r){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(r),n;switch(t===e?n="":t===ya&&e===va?n="LinearDisplayP3ToLinearSRGB":t===va&&e===ya&&(n="LinearSRGBToLinearDisplayP3"),r){case Ci:case Ba:return[n,"LinearTransferOETF"];case qe:case Qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Nf(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Pv(r.getShaderSource(t),a)}else return i}function Iv(r,t){let e=Lv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dv(r,t){let e;switch(t){case $m:e="Linear";break;case Km:e="Reinhard";break;case Qm:e="OptimizedCineon";break;case jm:e="ACESFilmic";break;case eg:e="AgX";break;case tg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Uv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function Nv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function Ov(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fv(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function _s(r){return r!==""}function Of(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ff(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(r){return r.replace(Bv,kv)}var zv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kv(r,t){let e=Jt[t];if(e===void 0){let n=zv.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(r){return r.replace(Vv,Hv)}function Hv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zf(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Em?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function Wv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xv(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===bs&&(t="ENVMAP_MODE_REFRACTION"),t}function Yv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qf:t="ENVMAP_BLENDING_MULTIPLY";break;case Zm:t="ENVMAP_BLENDING_MIX";break;case Jm:t="ENVMAP_BLENDING_ADD";break}return t}function qv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zv(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gv(e),c=Wv(e),h=Xv(e),f=Yv(e),u=qv(e),d=e.isWebGL2?"":Uv(e),_=Nv(e),g=Ov(s),m=i.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),y.length>0&&(y+=`
`)):(p=[zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),y=[d,zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?Dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Iv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=Rc(a),a=Of(a,e),a=Ff(a,e),o=Rc(o),o=Of(o,e),o=Ff(o,e),a=Bf(a),o=Bf(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=x+p+a,C=x+y+o,A=Uf(i,i.VERTEX_SHADER,b),w=Uf(i,i.FRAGMENT_SHADER,C);i.attachShader(m,A),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(N){if(r.debug.checkShaderErrors){let tt=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),D=i.getShaderInfoLog(w).trim(),H=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,w);else{let q=Nf(i,A,"vertex"),Y=Nf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+q+`
`+Y)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||D==="")&&(X=!1);X&&(N.diagnostics={runnable:H,programLog:tt,vertexShader:{log:L,prefix:p},fragmentShader:{log:D,prefix:y}})}i.deleteShader(A),i.deleteShader(w),v=new Ms(i,m),M=Fv(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,Cv)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}var Jv=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}};function $v(r,t,e,n,i,s,a){let o=new oo,l=new Pc,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,M,O,N,tt){let L=N.fog,D=tt.geometry,H=v.isMeshStandardMaterial?N.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),q=X&&X.mapping===Fa?X.image.height:null,Y=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let R=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=R!==void 0?R.length:0,lt=0;D.morphAttributes.position!==void 0&&(lt=1),D.morphAttributes.normal!==void 0&&(lt=2),D.morphAttributes.color!==void 0&&(lt=3);let J,K,at,yt;if(Y){let Et=ui[Y];J=Et.vertexShader,K=Et.fragmentShader}else J=v.vertexShader,K=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let mt=r.getRenderTarget(),Pt=tt.isInstancedMesh===!0,bt=tt.isBatchedMesh===!0,Dt=!!v.map,Mt=!!v.matcap,F=!!X,Gt=!!v.aoMap,vt=!!v.lightMap,Lt=!!v.bumpMap,xt=!!v.normalMap,V=!!v.displacementMap,Nt=!!v.emissiveMap,T=!!v.metalnessMap,S=!!v.roughnessMap,B=v.anisotropy>0,rt=v.clearcoat>0,Z=v.iridescence>0,$=v.sheen>0,et=v.transmission>0,nt=B&&!!v.anisotropyMap,st=rt&&!!v.clearcoatMap,St=rt&&!!v.clearcoatNormalMap,Ot=rt&&!!v.clearcoatRoughnessMap,it=Z&&!!v.iridescenceMap,ee=Z&&!!v.iridescenceThicknessMap,Ct=$&&!!v.sheenColorMap,ot=$&&!!v.sheenRoughnessMap,j=!!v.specularMap,ct=!!v.specularColorMap,Wt=!!v.specularIntensityMap,Zt=et&&!!v.transmissionMap,re=et&&!!v.thicknessMap,gt=!!v.gradientMap,ht=!!v.alphaMap,P=v.alphaTest>0,ut=!!v.alphaHash,dt=!!v.extensions,Bt=!!D.attributes.uv1,Ft=!!D.attributes.uv2,ne=!!D.attributes.uv3,le=Zi;return v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(le=r.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:K,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:bt,instancing:Pt,instancingColor:Pt&&tt.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ci,map:Dt,matcap:Mt,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:q,aoMap:Gt,lightMap:vt,bumpMap:Lt,normalMap:xt,displacementMap:u&&V,emissiveMap:Nt,normalMapObjectSpace:xt&&v.normalMapType===pg,normalMapTangentSpace:xt&&v.normalMapType===dg,metalnessMap:T,roughnessMap:S,anisotropy:B,anisotropyMap:nt,clearcoat:rt,clearcoatMap:st,clearcoatNormalMap:St,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:it,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:ot,specularMap:j,specularColorMap:ct,specularIntensityMap:Wt,transmission:et,transmissionMap:Zt,thicknessMap:re,gradientMap:gt,opaque:v.transparent===!1&&v.blending===vs,alphaMap:ht,alphaTest:P,alphaHash:ut,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:Gt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:Lt&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:V&&g(v.displacementMap.channel),emissiveMapUv:Nt&&g(v.emissiveMap.channel),metalnessMapUv:T&&g(v.metalnessMap.channel),roughnessMapUv:S&&g(v.roughnessMap.channel),anisotropyMapUv:nt&&g(v.anisotropyMap.channel),clearcoatMapUv:st&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ot&&g(v.sheenRoughnessMap.channel),specularMapUv:j&&g(v.specularMap.channel),specularColorMapUv:ct&&g(v.specularColorMap.channel),specularIntensityMapUv:Wt&&g(v.specularIntensityMap.channel),transmissionMapUv:Zt&&g(v.transmissionMap.channel),thicknessMapUv:re&&g(v.thicknessMap.channel),alphaMapUv:ht&&g(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Ft,vertexUv3s:ne,pointsUvs:tt.isPoints===!0&&!!D.attributes.uv&&(Dt||ht),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:tt.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ti,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)M.push(O),M.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(M,v),x(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function b(v){let M=_[v.type],O;if(M){let N=ui[M];O=zg.clone(N.uniforms)}else O=v.uniforms;return O}function C(v,M){let O;for(let N=0,tt=c.length;N<tt;N++){let L=c[N];if(L.cacheKey===M){O=L,++O.usedTimes;break}}return O===void 0&&(O=new Zv(r,M,v,s),c.push(O)),O}function A(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:I}}function Kv(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Qv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function kf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vf(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,d,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function o(f,u,d,_,g,m){let p=a(f,u,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,_,g,m){let p=a(f,u,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||Qv),n.length>1&&n.sort(u||kf),i.length>1&&i.sort(u||kf)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function jv(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Vf,r.set(n,[a])):i>=s.length?(a=new Vf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function ty(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ie};break;case"SpotLight":e={position:new k,direction:new k,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function ey(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ny=0;function iy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ry(r,t){let e=new ty,n=ey(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new k);let s=new k,a=new Ge,o=new Ge;function l(h,f){let u=0,d=0,_=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,m=0,p=0,y=0,x=0,b=0,C=0,A=0,w=0,I=0,v=0;h.sort(iy);let M=f===!0?Math.PI:1;for(let N=0,tt=h.length;N<tt;N++){let L=h[N],D=L.color,H=L.intensity,X=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*H*M,d+=D.g*H*M,_+=D.b*H*M;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],H);v++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){let R=L.shadow,Q=n.get(L);Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=L.shadow.matrix,b++}i.directional[g]=Y,g++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(D).multiplyScalar(H*M),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[p]=Y;let R=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,R.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=R.matrix,L.castShadow){let Q=n.get(L);Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=q,A++}p++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(D).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=Y,y++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*M),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let R=L.shadow,Q=n.get(L);Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,C++}i.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(H*M),Y.groundColor.copy(L.groundColor).multiplyScalar(H*M),i.hemi[x]=Y,x++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=_;let O=i.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==b||O.numPointShadows!==C||O.numSpotShadows!==A||O.numSpotMaps!==w||O.numLightProbes!==v)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,O.directionalLength=g,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=b,O.numPointShadows=C,O.numSpotShadows=A,O.numSpotMaps=w,O.numLightProbes=v,i.version=ny++)}function c(h,f){let u=0,d=0,_=0,g=0,m=0,p=f.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let b=h[y];if(b.isDirectionalLight){let C=i.directional[u];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(b.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),_++}else if(b.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let C=i.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Hf(r,t){let e=new ry(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sy(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),l;return o===void 0?(l=new Hf(r,t),e.set(s,[l])):a>=o.length?(l=new Hf(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ic=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dc=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ly(r,t,e){let n=new Ia,i=new de,s=new de,a=new Ze,o=new Ic({depthPacking:fg}),l=new Dc,c={},h=e.maxTextureSize,f={[$i]:wn,[wn]:$i,[Ti]:Ti},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Je;_.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new fi(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf;let p=this.type;this.render=function(A,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=r.getRenderTarget(),M=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),N=r.state;N.setBlending(qi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let tt=p!==wi&&this.type===wi,L=p===wi&&this.type!==wi;for(let D=0,H=A.length;D<H;D++){let X=A[D],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let Y=q.getFrameExtents();if(i.multiply(Y),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||tt===!0||L===!0){let Q=this.type!==wi?{minFilter:fn,magFilter:fn}:{};q.map!==null&&q.map.dispose(),q.map=new Ri(i.x,i.y,Q),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let R=q.getViewportCount();for(let Q=0;Q<R;Q++){let lt=q.getViewport(Q);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),N.viewport(a),q.updateMatrices(X,Q),n=q.getFrustum(),b(w,I,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===wi&&y(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,M,O)};function y(A,w){let I=t.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,I,u,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,I,d,g,null)}function x(A,w,I,v){let M=null,O=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)M=O;else if(M=I.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=M.uuid,tt=w.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let D=L[tt];D===void 0&&(D=M.clone(),L[tt]=D,w.addEventListener("dispose",C)),M=D}if(M.visible=w.visible,M.wireframe=w.wireframe,v===wi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=r.properties.get(M);N.light=I}return M}function b(A,w,I,v,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let tt=t.update(A),L=A.material;if(Array.isArray(L)){let D=tt.groups;for(let H=0,X=D.length;H<X;H++){let q=D[H],Y=L[q.materialIndex];if(Y&&Y.visible){let R=x(A,Y,v,M);A.onBeforeShadow(r,A,w,I,tt,R,q),r.renderBufferDirect(I,null,tt,R,A,q),A.onAfterShadow(r,A,w,I,tt,R,q)}}}else if(L.visible){let D=x(A,L,v,M);A.onBeforeShadow(r,A,w,I,tt,D,null),r.renderBufferDirect(I,null,tt,D,A,null),A.onAfterShadow(r,A,w,I,tt,D,null)}}let N=A.children;for(let tt=0,L=N.length;tt<L;tt++)b(N[tt],w,I,v,M)}function C(A){A.target.removeEventListener("dispose",C);for(let I in c){let v=c[I],M=A.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}function cy(r,t,e){let n=e.isWebGL2;function i(){let P=!1,ut=new Ze,dt=null,Bt=new Ze(0,0,0,0);return{setMask:function(Ft){dt!==Ft&&!P&&(r.colorMask(Ft,Ft,Ft,Ft),dt=Ft)},setLocked:function(Ft){P=Ft},setClear:function(Ft,ne,le,Rt,Et){Et===!0&&(Ft*=Rt,ne*=Rt,le*=Rt),ut.set(Ft,ne,le,Rt),Bt.equals(ut)===!1&&(r.clearColor(Ft,ne,le,Rt),Bt.copy(ut))},reset:function(){P=!1,dt=null,Bt.set(-1,0,0,0)}}}function s(){let P=!1,ut=null,dt=null,Bt=null;return{setTest:function(Ft){Ft?bt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(Ft){ut!==Ft&&!P&&(r.depthMask(Ft),ut=Ft)},setFunc:function(Ft){if(dt!==Ft){switch(Ft){case Vm:r.depthFunc(r.NEVER);break;case Hm:r.depthFunc(r.ALWAYS);break;case Gm:r.depthFunc(r.LESS);break;case ma:r.depthFunc(r.LEQUAL);break;case Wm:r.depthFunc(r.EQUAL);break;case Xm:r.depthFunc(r.GEQUAL);break;case Ym:r.depthFunc(r.GREATER);break;case qm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=Ft}},setLocked:function(Ft){P=Ft},setClear:function(Ft){Bt!==Ft&&(r.clearDepth(Ft),Bt=Ft)},reset:function(){P=!1,ut=null,dt=null,Bt=null}}}function a(){let P=!1,ut=null,dt=null,Bt=null,Ft=null,ne=null,le=null,Rt=null,Et=null;return{setTest:function(Ut){P||(Ut?bt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ut){ut!==Ut&&!P&&(r.stencilMask(Ut),ut=Ut)},setFunc:function(Ut,ft,kt){(dt!==Ut||Bt!==ft||Ft!==kt)&&(r.stencilFunc(Ut,ft,kt),dt=Ut,Bt=ft,Ft=kt)},setOp:function(Ut,ft,kt){(ne!==Ut||le!==ft||Rt!==kt)&&(r.stencilOp(Ut,ft,kt),ne=Ut,le=ft,Rt=kt)},setLocked:function(Ut){P=Ut},setClear:function(Ut){Et!==Ut&&(r.clearStencil(Ut),Et=Ut)},reset:function(){P=!1,ut=null,dt=null,Bt=null,Ft=null,ne=null,le=null,Rt=null,Et=null}}}let o=new i,l=new s,c=new a,h=new WeakMap,f=new WeakMap,u={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,b=null,C=null,A=null,w=null,I=null,v=new ie(0,0,0),M=0,O=!1,N=null,tt=null,L=null,D=null,H=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(R)[1]),q=Y>=1):R.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),q=Y>=2);let Q=null,lt={},J=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),at=new Ze().fromArray(J),yt=new Ze().fromArray(K);function mt(P,ut,dt,Bt){let Ft=new Uint8Array(4),ne=r.createTexture();r.bindTexture(P,ne),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<dt;le++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ut,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(ut+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return ne}let Pt={};Pt[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Pt[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pt[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),bt(r.DEPTH_TEST),l.setFunc(ma),Nt(!1),T(Mu),bt(r.CULL_FACE),xt(qi);function bt(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function Dt(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function Mt(P,ut){return d[P]!==ut?(r.bindFramebuffer(P,ut),d[P]=ut,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ut),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ut)),!0):!1}function F(P,ut){let dt=g,Bt=!1;if(P)if(dt=_.get(ut),dt===void 0&&(dt=[],_.set(ut,dt)),P.isWebGLMultipleRenderTargets){let Ft=P.texture;if(dt.length!==Ft.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,le=Ft.length;ne<le;ne++)dt[ne]=r.COLOR_ATTACHMENT0+ne;dt.length=Ft.length,Bt=!0}}else dt[0]!==r.COLOR_ATTACHMENT0&&(dt[0]=r.COLOR_ATTACHMENT0,Bt=!0);else dt[0]!==r.BACK&&(dt[0]=r.BACK,Bt=!0);Bt&&(e.isWebGL2?r.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Gt(P){return m!==P?(r.useProgram(P),m=P,!0):!1}let vt={[yr]:r.FUNC_ADD,[Tm]:r.FUNC_SUBTRACT,[Am]:r.FUNC_REVERSE_SUBTRACT};if(n)vt[Eu]=r.MIN,vt[wu]=r.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(vt[Eu]=P.MIN_EXT,vt[wu]=P.MAX_EXT)}let Lt={[Cm]:r.ZERO,[Rm]:r.ONE,[Pm]:r.SRC_COLOR,[uc]:r.SRC_ALPHA,[Om]:r.SRC_ALPHA_SATURATE,[Um]:r.DST_COLOR,[Im]:r.DST_ALPHA,[Lm]:r.ONE_MINUS_SRC_COLOR,[fc]:r.ONE_MINUS_SRC_ALPHA,[Nm]:r.ONE_MINUS_DST_COLOR,[Dm]:r.ONE_MINUS_DST_ALPHA,[Fm]:r.CONSTANT_COLOR,[Bm]:r.ONE_MINUS_CONSTANT_COLOR,[zm]:r.CONSTANT_ALPHA,[km]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(P,ut,dt,Bt,Ft,ne,le,Rt,Et,Ut){if(P===qi){p===!0&&(Dt(r.BLEND),p=!1);return}if(p===!1&&(bt(r.BLEND),p=!0),P!==wm){if(P!==y||Ut!==O){if((x!==yr||A!==yr)&&(r.blendEquation(r.FUNC_ADD),x=yr,A=yr),Ut)switch(P){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.ONE,r.ONE);break;case Su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,C=null,w=null,I=null,v.set(0,0,0),M=0,y=P,O=Ut}return}Ft=Ft||ut,ne=ne||dt,le=le||Bt,(ut!==x||Ft!==A)&&(r.blendEquationSeparate(vt[ut],vt[Ft]),x=ut,A=Ft),(dt!==b||Bt!==C||ne!==w||le!==I)&&(r.blendFuncSeparate(Lt[dt],Lt[Bt],Lt[ne],Lt[le]),b=dt,C=Bt,w=ne,I=le),(Rt.equals(v)===!1||Et!==M)&&(r.blendColor(Rt.r,Rt.g,Rt.b,Et),v.copy(Rt),M=Et),y=P,O=!1}function V(P,ut){P.side===Ti?Dt(r.CULL_FACE):bt(r.CULL_FACE);let dt=P.side===wn;ut&&(dt=!dt),Nt(dt),P.blending===vs&&P.transparent===!1?xt(qi):xt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Bt=P.stencilWrite;c.setTest(Bt),Bt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){N!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),N=P)}function T(P){P!==Sm?(bt(r.CULL_FACE),P!==tt&&(P===Mu?r.cullFace(r.BACK):P===bm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),tt=P}function S(P){P!==L&&(q&&r.lineWidth(P),L=P)}function B(P,ut,dt){P?(bt(r.POLYGON_OFFSET_FILL),(D!==ut||H!==dt)&&(r.polygonOffset(ut,dt),D=ut,H=dt)):Dt(r.POLYGON_OFFSET_FILL)}function rt(P){P?bt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Z(P){P===void 0&&(P=r.TEXTURE0+X-1),Q!==P&&(r.activeTexture(P),Q=P)}function $(P,ut,dt){dt===void 0&&(Q===null?dt=r.TEXTURE0+X-1:dt=Q);let Bt=lt[dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},lt[dt]=Bt),(Bt.type!==P||Bt.texture!==ut)&&(Q!==dt&&(r.activeTexture(dt),Q=dt),r.bindTexture(P,ut||Pt[P]),Bt.type=P,Bt.texture=ut)}function et(){let P=lt[Q];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(P){at.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function Zt(P){yt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),yt.copy(P))}function re(P,ut){let dt=f.get(ut);dt===void 0&&(dt=new WeakMap,f.set(ut,dt));let Bt=dt.get(P);Bt===void 0&&(Bt=r.getUniformBlockIndex(ut,P.name),dt.set(P,Bt))}function gt(P,ut){let Bt=f.get(ut).get(P);h.get(ut)!==Bt&&(r.uniformBlockBinding(ut,Bt,P.__bindingPointIndex),h.set(ut,Bt))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,lt={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,b=null,C=null,A=null,w=null,I=null,v=new ie(0,0,0),M=0,O=!1,N=null,tt=null,L=null,D=null,H=null,at.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:bt,disable:Dt,bindFramebuffer:Mt,drawBuffers:F,useProgram:Gt,setBlending:xt,setMaterial:V,setFlipSided:Nt,setCullFace:T,setLineWidth:S,setPolygonOffset:B,setScissorTest:rt,activeTexture:Z,bindTexture:$,unbindTexture:et,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:j,texImage3D:ct,updateUBOMapping:re,uniformBlockBinding:gt,texStorage2D:Ct,texStorage3D:ot,texSubImage2D:St,texSubImage3D:Ot,compressedTexSubImage2D:it,compressedTexSubImage3D:ee,scissor:Wt,viewport:Zt,reset:ht}}function hy(r,t,e,n,i,s,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return d?new OffscreenCanvas(T,S):Sa("canvas")}function g(T,S,B,rt){let Z=1;if((T.width>rt||T.height>rt)&&(Z=rt/Math.max(T.width,T.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let $=S?vc:Math.floor,et=$(Z*T.width),nt=$(Z*T.height);f===void 0&&(f=_(et,nt));let st=B?_(et,nt):f;return st.width=et,st.height=nt,st.getContext("2d").drawImage(T,0,0,et,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+et+"x"+nt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return sf(T.width)&&sf(T.height)}function p(T){return o?!1:T.wrapS!==ei||T.wrapT!==ei||T.minFilter!==fn&&T.minFilter!==Hn}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==fn&&T.minFilter!==Hn}function x(T){r.generateMipmap(T)}function b(T,S,B,rt,Z=!1){if(o===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),S===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RGBA){let et=Z?xa:fe.getTransfer(rt);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=et===ve?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function C(T,S,B){return y(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){return T===fn||T===Tu||T===Dl?r.NEAREST:r.LINEAR}function w(T){let S=T.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&h.delete(S)}function I(T){let S=T.target;S.removeEventListener("dispose",I),O(S)}function v(T){let S=n.get(T);if(S.__webglInit===void 0)return;let B=T.source,rt=u.get(B);if(rt){let Z=rt[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(T),Object.keys(rt).length===0&&u.delete(B)}n.remove(T)}function M(T){let S=n.get(T);r.deleteTexture(S.__webglTexture);let B=T.source,rt=u.get(B);delete rt[S.__cacheKey],a.memory.textures--}function O(T){let S=T.texture,B=n.get(T),rt=n.get(S);if(rt.__webglTexture!==void 0&&(r.deleteTexture(rt.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let $=0;$<B.__webglFramebuffer[Z].length;$++)r.deleteFramebuffer(B.__webglFramebuffer[Z][$]);else r.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)r.deleteFramebuffer(B.__webglFramebuffer[Z]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,$=S.length;Z<$;Z++){let et=n.get(S[Z]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(S[Z])}n.remove(S),n.remove(T)}let N=0;function tt(){N=0}function L(){let T=N;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),N+=1,T}function D(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function H(T,S){let B=n.get(T);if(T.isVideoTexture&&V(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,T,S);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function X(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){at(B,T,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function q(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){at(B,T,S);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function Y(T,S){let B=n.get(T);if(T.version>0&&B.__version!==T.version){yt(B,T,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}let R={[mc]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[gc]:r.MIRRORED_REPEAT},Q={[fn]:r.NEAREST,[Tu]:r.NEAREST_MIPMAP_NEAREST,[Dl]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[ng]:r.LINEAR_MIPMAP_NEAREST,[ro]:r.LINEAR_MIPMAP_LINEAR},lt={[mg]:r.NEVER,[Mg]:r.ALWAYS,[gg]:r.LESS,[ld]:r.LEQUAL,[_g]:r.EQUAL,[yg]:r.GEQUAL,[xg]:r.GREATER,[vg]:r.NOTEQUAL};function J(T,S,B){if(B?(r.texParameteri(T,r.TEXTURE_WRAP_S,R[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,R[S.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,R[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Q[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Q[S.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==ei||S.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==fn&&S.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===fn||S.minFilter!==Dl&&S.minFilter!==ro||S.type===Yi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===so&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));let rt=S.source,Z=u.get(rt);Z===void 0&&(Z={},u.set(rt,Z));let $=D(S);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[$].usedTimes++;let et=Z[T.__cacheKey];et!==void 0&&(Z[T.__cacheKey].usedTimes--,et.usedTimes===0&&M(S)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return B}function at(T,S,B){let rt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=r.TEXTURE_3D);let Z=K(T,S),$=S.source;e.bindTexture(rt,T.__webglTexture,r.TEXTURE0+B);let et=n.get($);if($.version!==et.__version||Z===!0){e.activeTexture(r.TEXTURE0+B);let nt=fe.getPrimaries(fe.workingColorSpace),st=S.colorSpace===Gn?null:fe.getPrimaries(S.colorSpace),St=S.colorSpace===Gn||nt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ot=p(S)&&m(S.image)===!1,it=g(S.image,Ot,!1,i.maxTextureSize);it=Nt(S,it);let ee=m(it)||o,Ct=s.convert(S.format,S.colorSpace),ot=s.convert(S.type),j=b(S.internalFormat,Ct,ot,S.colorSpace,S.isVideoTexture);J(rt,S,ee);let ct,Wt=S.mipmaps,Zt=o&&S.isVideoTexture!==!0&&j!==od,re=et.__version===void 0||Z===!0,gt=C(S,it,ee);if(S.isDepthTexture)j=r.DEPTH_COMPONENT,o?S.type===Yi?j=r.DEPTH_COMPONENT32F:S.type===Xi?j=r.DEPTH_COMPONENT24:S.type===Sr?j=r.DEPTH24_STENCIL8:j=r.DEPTH_COMPONENT16:S.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===br&&j===r.DEPTH_COMPONENT&&S.type!==Kc&&S.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Xi,ot=s.convert(S.type)),S.format===Es&&j===r.DEPTH_COMPONENT&&(j=r.DEPTH_STENCIL,S.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Sr,ot=s.convert(S.type))),re&&(Zt?e.texStorage2D(r.TEXTURE_2D,1,j,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,j,it.width,it.height,0,Ct,ot,null));else if(S.isDataTexture)if(Wt.length>0&&ee){Zt&&re&&e.texStorage2D(r.TEXTURE_2D,gt,j,Wt[0].width,Wt[0].height);for(let ht=0,P=Wt.length;ht<P;ht++)ct=Wt[ht],Zt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,ct.width,ct.height,Ct,ot,ct.data):e.texImage2D(r.TEXTURE_2D,ht,j,ct.width,ct.height,0,Ct,ot,ct.data);S.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(r.TEXTURE_2D,gt,j,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,Ct,ot,it.data)):e.texImage2D(r.TEXTURE_2D,0,j,it.width,it.height,0,Ct,ot,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,j,Wt[0].width,Wt[0].height,it.depth);for(let ht=0,P=Wt.length;ht<P;ht++)ct=Wt[ht],S.format!==ni?Ct!==null?Zt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,ct.width,ct.height,it.depth,Ct,ct.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,j,ct.width,ct.height,it.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,ct.width,ct.height,it.depth,Ct,ot,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ht,j,ct.width,ct.height,it.depth,0,Ct,ot,ct.data)}else{Zt&&re&&e.texStorage2D(r.TEXTURE_2D,gt,j,Wt[0].width,Wt[0].height);for(let ht=0,P=Wt.length;ht<P;ht++)ct=Wt[ht],S.format!==ni?Ct!==null?Zt?e.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,ht,j,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,ct.width,ct.height,Ct,ot,ct.data):e.texImage2D(r.TEXTURE_2D,ht,j,ct.width,ct.height,0,Ct,ot,ct.data)}else if(S.isDataArrayTexture)Zt?(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,j,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Ct,ot,it.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,it.width,it.height,it.depth,0,Ct,ot,it.data);else if(S.isData3DTexture)Zt?(re&&e.texStorage3D(r.TEXTURE_3D,gt,j,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Ct,ot,it.data)):e.texImage3D(r.TEXTURE_3D,0,j,it.width,it.height,it.depth,0,Ct,ot,it.data);else if(S.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(r.TEXTURE_2D,gt,j,it.width,it.height);else{let ht=it.width,P=it.height;for(let ut=0;ut<gt;ut++)e.texImage2D(r.TEXTURE_2D,ut,j,ht,P,0,Ct,ot,null),ht>>=1,P>>=1}}else if(Wt.length>0&&ee){Zt&&re&&e.texStorage2D(r.TEXTURE_2D,gt,j,Wt[0].width,Wt[0].height);for(let ht=0,P=Wt.length;ht<P;ht++)ct=Wt[ht],Zt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,Ct,ot,ct):e.texImage2D(r.TEXTURE_2D,ht,j,Ct,ot,ct);S.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(r.TEXTURE_2D,gt,j,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,ot,it)):e.texImage2D(r.TEXTURE_2D,0,j,Ct,ot,it);y(S,ee)&&x(rt),et.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function yt(T,S,B){if(S.image.length!==6)return;let rt=K(T,S),Z=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+B);let $=n.get(Z);if(Z.version!==$.__version||rt===!0){e.activeTexture(r.TEXTURE0+B);let et=fe.getPrimaries(fe.workingColorSpace),nt=S.colorSpace===Gn?null:fe.getPrimaries(S.colorSpace),st=S.colorSpace===Gn||et===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,Ot=S.image[0]&&S.image[0].isDataTexture,it=[];for(let ht=0;ht<6;ht++)!St&&!Ot?it[ht]=g(S.image[ht],!1,!0,i.maxCubemapSize):it[ht]=Ot?S.image[ht].image:S.image[ht],it[ht]=Nt(S,it[ht]);let ee=it[0],Ct=m(ee)||o,ot=s.convert(S.format,S.colorSpace),j=s.convert(S.type),ct=b(S.internalFormat,ot,j,S.colorSpace),Wt=o&&S.isVideoTexture!==!0,Zt=$.__version===void 0||rt===!0,re=C(S,ee,Ct);J(r.TEXTURE_CUBE_MAP,S,Ct);let gt;if(St){Wt&&Zt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,re,ct,ee.width,ee.height);for(let ht=0;ht<6;ht++){gt=it[ht].mipmaps;for(let P=0;P<gt.length;P++){let ut=gt[P];S.format!==ni?ot!==null?Wt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P,0,0,ut.width,ut.height,ot,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P,ct,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P,0,0,ut.width,ut.height,ot,j,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P,ct,ut.width,ut.height,0,ot,j,ut.data)}}}else{gt=S.mipmaps,Wt&&Zt&&(gt.length>0&&re++,e.texStorage2D(r.TEXTURE_CUBE_MAP,re,ct,it[0].width,it[0].height));for(let ht=0;ht<6;ht++)if(Ot){Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it[ht].width,it[ht].height,ot,j,it[ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ct,it[ht].width,it[ht].height,0,ot,j,it[ht].data);for(let P=0;P<gt.length;P++){let dt=gt[P].image[ht].image;Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P+1,0,0,dt.width,dt.height,ot,j,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P+1,ct,dt.width,dt.height,0,ot,j,dt.data)}}else{Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ot,j,it[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ct,ot,j,it[ht]);for(let P=0;P<gt.length;P++){let ut=gt[P];Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P+1,0,0,ot,j,ut.image[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,P+1,ct,ot,j,ut.image[ht])}}}y(S,Ct)&&x(r.TEXTURE_CUBE_MAP),$.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function mt(T,S,B,rt,Z,$){let et=s.convert(B.format,B.colorSpace),nt=s.convert(B.type),st=b(B.internalFormat,et,nt,B.colorSpace);if(!n.get(S).__hasExternalTextures){let Ot=Math.max(1,S.width>>$),it=Math.max(1,S.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,st,Ot,it,S.depth,0,et,nt,null):e.texImage2D(Z,$,st,Ot,it,0,et,nt,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),xt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,Z,n.get(B).__webglTexture,0,Lt(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,Z,n.get(B).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(T,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let rt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||xt(S)){let Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Yi?rt=r.DEPTH_COMPONENT32F:Z.type===Xi&&(rt=r.DEPTH_COMPONENT24));let $=Lt(S);xt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,rt,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,$,rt,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,rt,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){let rt=Lt(S);B&&xt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,S.width,S.height):xt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{let rt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<rt.length;Z++){let $=rt[Z],et=s.convert($.format,$.colorSpace),nt=s.convert($.type),st=b($.internalFormat,et,nt,$.colorSpace),St=Lt(S);B&&xt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,st,S.width,S.height):xt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,st,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,st,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let rt=n.get(S.depthTexture).__webglTexture,Z=Lt(S);if(S.depthTexture.format===br)xt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(S.depthTexture.format===Es)xt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Dt(T){let S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]=r.createRenderbuffer(),Pt(S.__webglDepthbuffer[rt],T,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Pt(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(T,S,B){let rt=n.get(T);S!==void 0&&mt(rt.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Dt(T)}function F(T){let S=T.texture,B=n.get(T),rt=n.get(S);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=S.version,a.memory.textures++);let Z=T.isWebGLCubeRenderTarget===!0,$=T.isWebGLMultipleRenderTargets===!0,et=m(T)||o;if(Z){B.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[nt]=[];for(let st=0;st<S.mipmaps.length;st++)B.__webglFramebuffer[nt][st]=r.createFramebuffer()}else B.__webglFramebuffer[nt]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let nt=0;nt<S.mipmaps.length;nt++)B.__webglFramebuffer[nt]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if($)if(i.drawBuffers){let nt=T.texture;for(let st=0,St=nt.length;st<St;st++){let Ot=n.get(nt[st]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&xt(T)===!1){let nt=$?S:[S];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<nt.length;st++){let St=nt[st];B.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[st]);let Ot=s.convert(St.format,St.colorSpace),it=s.convert(St.type),ee=b(St.internalFormat,Ot,it,St.colorSpace,T.isXRRenderTarget===!0),Ct=Lt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,ee,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,B.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),J(r.TEXTURE_CUBE_MAP,S,et);for(let nt=0;nt<6;nt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)mt(B.__webglFramebuffer[nt][st],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else mt(B.__webglFramebuffer[nt],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);y(S,et)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){let nt=T.texture;for(let st=0,St=nt.length;st<St;st++){let Ot=nt[st],it=n.get(Ot);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),J(r.TEXTURE_2D,Ot,et),mt(B.__webglFramebuffer,T,Ot,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,0),y(Ot,et)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let nt=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?nt=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,rt.__webglTexture),J(nt,S,et),o&&S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)mt(B.__webglFramebuffer[st],T,S,r.COLOR_ATTACHMENT0,nt,st);else mt(B.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,nt,0);y(S,et)&&x(nt),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Gt(T){let S=m(T)||o,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let rt=0,Z=B.length;rt<Z;rt++){let $=B[rt];if(y($,S)){let et=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,nt=n.get($).__webglTexture;e.bindTexture(et,nt),x(et),e.unbindTexture()}}}function vt(T){if(o&&T.samples>0&&xt(T)===!1){let S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,rt=T.height,Z=r.COLOR_BUFFER_BIT,$=[],et=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=n.get(T),st=T.isWebGLMultipleRenderTargets===!0;if(st)for(let St=0;St<S.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let St=0;St<S.length;St++){$.push(r.COLOR_ATTACHMENT0+St),T.depthBuffer&&$.push(et);let Ot=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),st&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,nt.__webglColorRenderbuffer[St]),Ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[et])),st){let it=n.get(S[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,B,rt,0,0,B,rt,Z,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<S.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,nt.__webglColorRenderbuffer[St]);let Ot=n.get(S[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Lt(T){return Math.min(i.maxSamples,T.samples)}function xt(T){let S=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(T){let S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Nt(T,S){let B=T.colorSpace,rt=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===_c||B!==Ci&&B!==Gn&&(fe.getTransfer(B)===ve?o===!1?t.has("EXT_sRGB")===!0&&rt===ni?(T.format=_c,T.minFilter=Hn,T.generateMipmaps=!1):S=ba.sRGBToLinear(S):(rt!==ni||Z!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Mt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xt}function uy(r,t,e){let n=e.isWebGL2;function i(s,a=Gn){let o,l=fe.getTransfer(a);if(s===Ji)return r.UNSIGNED_BYTE;if(s===ed)return r.UNSIGNED_SHORT_4_4_4_4;if(s===nd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ig)return r.BYTE;if(s===rg)return r.SHORT;if(s===Kc)return r.UNSIGNED_SHORT;if(s===td)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===so)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===sg)return r.ALPHA;if(s===ni)return r.RGBA;if(s===og)return r.LUMINANCE;if(s===ag)return r.LUMINANCE_ALPHA;if(s===br)return r.DEPTH_COMPONENT;if(s===Es)return r.DEPTH_STENCIL;if(s===_c)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===lg)return r.RED;if(s===id)return r.RED_INTEGER;if(s===cg)return r.RG;if(s===rd)return r.RG_INTEGER;if(s===sd)return r.RGBA_INTEGER;if(s===Ul||s===Nl||s===Ol||s===Fl)if(l===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Au||s===Cu||s===Ru||s===Pu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Au)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ru)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lu||s===Iu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Lu)return l===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Iu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Du||s===Uu||s===Nu||s===Ou||s===Fu||s===Bu||s===zu||s===ku||s===Vu||s===Hu||s===Gu||s===Wu||s===Xu||s===Yu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Du)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ou)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ku)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yu)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bl||s===qu||s===Zu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Bl)return l===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hg||s===Ju||s===$u||s===Ku)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$u)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ku)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sr?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Uc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xs=class extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nc=class extends Ki{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null,g=e.getContextAttributes(),m=null,p=null,y=[],x=[],b=new de,C=null,A=new dn;A.layers.enable(1),A.viewport=new Ze;let w=new dn;w.layers.enable(2),w.viewport=new Ze;let I=[A,w],v=new Uc;v.layers.enable(1),v.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=y[J];return K===void 0&&(K=new io,y[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=y[J];return K===void 0&&(K=new io,y[J]=K),K.getGripSpace()},this.getHand=function(J){let K=y[J];return K===void 0&&(K=new io,y[J]=K),K.getHandSpace()};function N(J){let K=x.indexOf(J.inputSource);if(K===-1)return;let at=y[K];at!==void 0&&(at.update(J.inputSource,J.frame,c||a),at.dispatchEvent({type:J.type,data:J.inputSource}))}function tt(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",L);for(let J=0;J<y.length;J++){let K=x[J];K!==null&&(x[J]=null,y[J].disconnect(K))}M=null,O=null,t.setRenderTarget(m),d=null,u=null,f=null,i=null,p=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ri(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,at=null,yt=null;g.depth&&(yt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?Es:br,at=g.stencil?Sr:Xi);let mt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(mt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Ri(u.textureWidth,u.textureHeight,{format:ni,type:Ji,depthTexture:new Ua(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Pt=t.properties.get(p);Pt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(J){for(let K=0;K<J.removed.length;K++){let at=J.removed[K],yt=x.indexOf(at);yt>=0&&(x[yt]=null,y[yt].disconnect(at))}for(let K=0;K<J.added.length;K++){let at=J.added[K],yt=x.indexOf(at);if(yt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=x.length){x.push(at),yt=Pt;break}else if(x[Pt]===null){x[Pt]=at,yt=Pt;break}if(yt===-1)break}let mt=y[yt];mt&&mt.connect(at)}}let D=new k,H=new k;function X(J,K,at){D.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);let yt=D.distanceTo(H),mt=K.projectionMatrix.elements,Pt=at.projectionMatrix.elements,bt=mt[14]/(mt[10]-1),Dt=mt[14]/(mt[10]+1),Mt=(mt[9]+1)/mt[5],F=(mt[9]-1)/mt[5],Gt=(mt[8]-1)/mt[0],vt=(Pt[8]+1)/Pt[0],Lt=bt*Gt,xt=bt*vt,V=yt/(-Gt+vt),Nt=V*-Gt;K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(V),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let T=bt+V,S=Dt+V,B=Lt-Nt,rt=xt+(yt-Nt),Z=Mt*Dt/S*T,$=F*Dt/S*T;J.projectionMatrix.makePerspective(B,rt,Z,$,T,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function q(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;v.near=w.near=A.near=J.near,v.far=w.far=A.far=J.far,(M!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,O=v.far);let K=J.parent,at=v.cameras;q(v,K);for(let yt=0;yt<at.length;yt++)q(at[yt],K);at.length===2?X(v,A,w):v.projectionMatrix.copy(A.projectionMatrix),Y(J,v,K)};function Y(J,K,at){at===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)};let R=null;function Q(J,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let yt=!1;at.length!==v.cameras.length&&(v.cameras.length=0,yt=!0);for(let mt=0;mt<at.length;mt++){let Pt=at[mt],bt=null;if(d!==null)bt=d.getViewport(Pt);else{let Mt=f.getViewSubImage(u,Pt);bt=Mt.viewport,mt===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let Dt=I[mt];Dt===void 0&&(Dt=new dn,Dt.layers.enable(mt),Dt.viewport=new Ze,I[mt]=Dt),Dt.matrix.fromArray(Pt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Pt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(bt.x,bt.y,bt.width,bt.height),mt===0&&(v.matrix.copy(Dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),yt===!0&&v.cameras.push(Dt)}}for(let at=0;at<y.length;at++){let yt=x[at],mt=y[at];yt!==null&&mt!==void 0&&mt.update(yt,K,c||a)}R&&R(J,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let lt=new fd;lt.setAnimationLoop(Q),this.setAnimationLoop=function(J){R=J},this.dispose=function(){}}};function dy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ud(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function py(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=i[y.id];b===void 0&&(_(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(y,C);let A=t.render.frame;s[y.id]!==A&&(u(y),s[y.id]=A)}function h(y){let x=f();y.__bindingPointIndex=x;let b=r.createBuffer(),C=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let x=i[y.id],b=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,w=b.length;A<w;A++){let I=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,M=I.length;v<M;v++){let O=I[v];if(d(O,A,v,C)===!0){let N=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value],L=0;for(let D=0;D<tt.length;D++){let H=tt[D],X=g(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,N+L,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,b,C){let A=y.value,w=x+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let I=C[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(y){let x=y.uniforms,b=0,C=16;for(let w=0,I=x.length;w<I;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,O=v.length;M<O;M++){let N=v[M],tt=Array.isArray(N.value)?N.value:[N.value];for(let L=0,D=tt.length;L<D;L++){let H=tt[L],X=g(H),q=b%C;q!==0&&C-q<X.boundary&&(b+=C-q),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=X.storage}}}let A=b%C;return A>0&&(b+=C-A),y.__size=b,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var lo=class{constructor(t={}){let{canvas:e=bg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let x=this,b=!1,C=0,A=0,w=null,I=-1,v=null,M=new Ze,O=new Ze,N=null,tt=new ie(0),L=0,D=e.width,H=e.height,X=1,q=null,Y=null,R=new Ze(0,0,D,H),Q=new Ze(0,0,D,H),lt=!1,J=new Ia,K=!1,at=!1,yt=null,mt=new Ge,Pt=new de,bt=new k,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return w===null?X:1}let F=n;function Gt(E,U){for(let W=0;W<E.length;W++){let G=E[W],z=e.getContext(G,U);if(z!==null)return z}return null}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=Gt(U,E),F===null)throw Gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let vt,Lt,xt,V,Nt,T,S,B,rt,Z,$,et,nt,st,St,Ot,it,ee,Ct,ot,j,ct,Wt,Zt;function re(){vt=new Dx(F),Lt=new Ax(F,vt,t),vt.init(Lt),ct=new uy(F,vt,Lt),xt=new cy(F,vt,Lt),V=new Ox(F),Nt=new Kv,T=new hy(F,vt,xt,Nt,Lt,ct,V),S=new Rx(x),B=new Ix(x),rt=new Wg(F,Lt),Wt=new wx(F,vt,rt,Lt),Z=new Ux(F,rt,V,Wt),$=new kx(F,Z,rt,V),Ct=new zx(F,Lt,T),Ot=new Cx(Nt),et=new $v(x,S,B,vt,Lt,Wt,Ot),nt=new dy(x,Nt),st=new jv,St=new sy(vt,Lt),ee=new Ex(x,S,B,xt,$,u,l),it=new ly(x,$,Lt),Zt=new py(F,V,Lt,xt),ot=new Tx(F,vt,V,Lt),j=new Nx(F,vt,V,Lt),V.programs=et.programs,x.capabilities=Lt,x.extensions=vt,x.properties=Nt,x.renderLists=st,x.shadowMap=it,x.state=xt,x.info=V}re();let gt=new Nc(x,F);this.xr=gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(D,H,!1))},this.getSize=function(E){return E.set(D,H)},this.setSize=function(E,U,W=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,H=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(D*X,H*X).floor()},this.setDrawingBufferSize=function(E,U,W){D=E,H=U,X=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,U,W,G){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,U,W,G),xt.viewport(M.copy(R).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,U,W,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,U,W,G),xt.scissor(O.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){xt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,U=!0,W=!0){let G=0;if(E){let z=!1;if(w!==null){let pt=w.texture.format;z=pt===sd||pt===rd||pt===id}if(z){let pt=w.texture.type,Tt=pt===Ji||pt===Xi||pt===Kc||pt===Sr||pt===ed||pt===nd,Vt=ee.getClearColor(),At=ee.getClearAlpha(),It=Vt.r,Ht=Vt.g,Yt=Vt.b;Tt?(d[0]=It,d[1]=Ht,d[2]=Yt,d[3]=At,F.clearBufferuiv(F.COLOR,0,d)):(_[0]=It,_[1]=Ht,_[2]=Yt,_[3]=At,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),W&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),st.dispose(),St.dispose(),Nt.dispose(),S.dispose(),B.dispose(),$.dispose(),Wt.dispose(),Zt.dispose(),et.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Et),gt.removeEventListener("sessionend",Ut),yt&&(yt.dispose(),yt=null),ft.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=V.autoReset,U=it.enabled,W=it.autoUpdate,G=it.needsUpdate,z=it.type;re(),V.autoReset=E,it.enabled=U,it.autoUpdate=W,it.needsUpdate=G,it.type=z}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){let U=E.target;U.removeEventListener("dispose",dt),Bt(U)}function Bt(E){Ft(E),Nt.remove(E)}function Ft(E){let U=Nt.get(E).programs;U!==void 0&&(U.forEach(function(W){et.releaseProgram(W)}),E.isShaderMaterial&&et.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,G,z,pt){U===null&&(U=Dt);let Tt=z.isMesh&&z.matrixWorld.determinant()<0,Vt=ge(E,U,W,G,z);xt.setMaterial(G,Tt);let At=W.index,It=1;if(G.wireframe===!0){if(At=Z.getWireframeAttribute(W),At===void 0)return;It=2}let Ht=W.drawRange,Yt=W.attributes.position,Me=Ht.start*It,Fe=(Ht.start+Ht.count)*It;pt!==null&&(Me=Math.max(Me,pt.start*It),Fe=Math.min(Fe,(pt.start+pt.count)*It)),At!==null?(Me=Math.max(Me,0),Fe=Math.min(Fe,At.count)):Yt!=null&&(Me=Math.max(Me,0),Fe=Math.min(Fe,Yt.count));let he=Fe-Me;if(he<0||he===1/0)return;Wt.setup(z,G,Vt,W,At);let hn,ue=ot;if(At!==null&&(hn=rt.get(At),ue=j,ue.setIndex(hn)),z.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*Mt()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(z.isLine){let qt=G.linewidth;qt===void 0&&(qt=1),xt.setLineWidth(qt*Mt()),z.isLineSegments?ue.setMode(F.LINES):z.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else z.isPoints?ue.setMode(F.POINTS):z.isSprite&&ue.setMode(F.TRIANGLES);if(z.isBatchedMesh)ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ue.renderInstances(Me,he,z.count);else if(W.isInstancedBufferGeometry){let qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rl=Math.min(W.instanceCount,qt);ue.renderInstances(Me,he,Rl)}else ue.render(Me,he)};function ne(E,U,W){E.transparent===!0&&E.side===Ti&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,me(E,U,W),E.side=$i,E.needsUpdate=!0,me(E,U,W),E.side=Ti):me(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),m=St.get(W),m.init(),y.push(m),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);let G=new Set;return E.traverse(function(z){let pt=z.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){let Vt=pt[Tt];ne(Vt,W,z),G.add(Vt)}else ne(pt,W,z),G.add(pt)}),y.pop(),m=null,G},this.compileAsync=function(E,U,W=null){let G=this.compile(E,U,W);return new Promise(z=>{function pt(){if(G.forEach(function(Tt){Nt.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){z(E);return}setTimeout(pt,10)}vt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let le=null;function Rt(E){le&&le(E)}function Et(){ft.stop()}function Ut(){ft.start()}let ft=new fd;ft.setAnimationLoop(Rt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(E){le=E,gt.setAnimationLoop(E),E===null?ft.stop():ft.start()},gt.addEventListener("sessionstart",Et),gt.addEventListener("sessionend",Ut),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(U),U=gt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),m=St.get(E,y.length),m.init(),y.push(m),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(mt),at=this.localClippingEnabled,K=Ot.init(this.clippingPlanes,at),g=st.get(E,p.length),g.init(),p.push(g),kt(E,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,Y),this.info.render.frame++,K===!0&&Ot.beginShadows();let W=m.state.shadowsArray;if(it.render(W,E,U),K===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(g,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){let G=U.cameras;for(let z=0,pt=G.length;z<pt;z++){let Tt=G[z];zt(g,E,Tt,Tt.viewport)}}else zt(g,E,U);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),Wt.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function kt(E,U,W,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){G&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);let Tt=$.update(E),Vt=E.material;Vt.visible&&g.push(E,Tt,Vt,W,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let Tt=$.update(E),Vt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),bt.copy(Tt.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(Vt)){let At=Tt.groups;for(let It=0,Ht=At.length;It<Ht;It++){let Yt=At[It],Me=Vt[Yt.materialIndex];Me&&Me.visible&&g.push(E,Tt,Me,W,bt.z,Yt)}}else Vt.visible&&g.push(E,Tt,Vt,W,bt.z,null)}}let pt=E.children;for(let Tt=0,Vt=pt.length;Tt<Vt;Tt++)kt(pt[Tt],U,W,G)}function zt(E,U,W,G){let z=E.opaque,pt=E.transmissive,Tt=E.transparent;m.setupLightsView(W),K===!0&&Ot.setGlobalState(x.clippingPlanes,W),pt.length>0&&Xt(z,pt,U,W),G&&xt.viewport(M.copy(G)),z.length>0&&Ee(z,U,W),pt.length>0&&Ee(pt,U,W),Tt.length>0&&Ee(Tt,U,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Xt(E,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let pt=Lt.isWebGL2;yt===null&&(yt=new Ri(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?so:Ji,minFilter:ro,samples:pt?4:0})),x.getDrawingBufferSize(Pt),pt?yt.setSize(Pt.x,Pt.y):yt.setSize(vc(Pt.x),vc(Pt.y));let Tt=x.getRenderTarget();x.setRenderTarget(yt),x.getClearColor(tt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Vt=x.toneMapping;x.toneMapping=Zi,Ee(E,W,G),T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt);let At=!1;for(let It=0,Ht=U.length;It<Ht;It++){let Yt=U[It],Me=Yt.object,Fe=Yt.geometry,he=Yt.material,hn=Yt.group;if(he.side===Ti&&Me.layers.test(G.layers)){let ue=he.side;he.side=wn,he.needsUpdate=!0,Kt(Me,W,G,Fe,he,hn),he.side=ue,he.needsUpdate=!0,At=!0}}At===!0&&(T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt)),x.setRenderTarget(Tt),x.setClearColor(tt,L),x.toneMapping=Vt}function Ee(E,U,W){let G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,pt=E.length;z<pt;z++){let Tt=E[z],Vt=Tt.object,At=Tt.geometry,It=G===null?Tt.material:G,Ht=Tt.group;Vt.layers.test(W.layers)&&Kt(Vt,U,W,At,It,Ht)}}function Kt(E,U,W,G,z,pt){E.onBeforeRender(x,U,W,G,z,pt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,W,G,E,pt),z.transparent===!0&&z.side===Ti&&z.forceSinglePass===!1?(z.side=wn,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,E,pt),z.side=$i,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,E,pt),z.side=Ti):x.renderBufferDirect(W,U,G,z,E,pt),E.onAfterRender(x,U,W,G,z,pt)}function me(E,U,W){U.isScene!==!0&&(U=Dt);let G=Nt.get(E),z=m.state.lights,pt=m.state.shadowsArray,Tt=z.state.version,Vt=et.getParameters(E,z.state,pt,U,W),At=et.getProgramCacheKey(Vt),It=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||G.environment),It===void 0&&(E.addEventListener("dispose",dt),It=new Map,G.programs=It);let Ht=It.get(At);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===Tt)return xe(E,Vt),Ht}else Vt.uniforms=et.getUniforms(E),E.onBuild(W,Vt,x),E.onBeforeCompile(Vt,x),Ht=et.acquireProgram(Vt,At),It.set(At,Ht),G.uniforms=Vt.uniforms;let Yt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Yt.clippingPlanes=Ot.uniform),xe(E,Vt),G.needsLights=Ln(E),G.lightsStateVersion=Tt,G.needsLights&&(Yt.ambientLightColor.value=z.state.ambient,Yt.lightProbe.value=z.state.probe,Yt.directionalLights.value=z.state.directional,Yt.directionalLightShadows.value=z.state.directionalShadow,Yt.spotLights.value=z.state.spot,Yt.spotLightShadows.value=z.state.spotShadow,Yt.rectAreaLights.value=z.state.rectArea,Yt.ltc_1.value=z.state.rectAreaLTC1,Yt.ltc_2.value=z.state.rectAreaLTC2,Yt.pointLights.value=z.state.point,Yt.pointLightShadows.value=z.state.pointShadow,Yt.hemisphereLights.value=z.state.hemi,Yt.directionalShadowMap.value=z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Yt.spotShadowMap.value=z.state.spotShadowMap,Yt.spotLightMatrix.value=z.state.spotLightMatrix,Yt.spotLightMap.value=z.state.spotLightMap,Yt.pointShadowMap.value=z.state.pointShadowMap,Yt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function Oe(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ms.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function xe(E,U){let W=Nt.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function ge(E,U,W,G,z){U.isScene!==!0&&(U=Dt),T.resetTextureUnits();let pt=U.fog,Tt=G.isMeshStandardMaterial?U.environment:null,Vt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ci,At=(G.isMeshStandardMaterial?B:S).get(G.envMap||Tt),It=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Yt=!!W.morphAttributes.position,Me=!!W.morphAttributes.normal,Fe=!!W.morphAttributes.color,he=Zi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(he=x.toneMapping);let hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=hn!==void 0?hn.length:0,qt=Nt.get(G),Rl=m.state.lights;if(K===!0&&(at===!0||E!==v)){let kn=E===v&&G.id===I;Ot.setState(G,E,kn)}let Ce=!1;G.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Rl.state.version||qt.outputColorSpace!==Vt||z.isBatchedMesh&&qt.batching===!1||!z.isBatchedMesh&&qt.batching===!0||z.isInstancedMesh&&qt.instancing===!1||!z.isInstancedMesh&&qt.instancing===!0||z.isSkinnedMesh&&qt.skinning===!1||!z.isSkinnedMesh&&qt.skinning===!0||z.isInstancedMesh&&qt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qt.instancingColor===!1&&z.instanceColor!==null||qt.envMap!==At||G.fog===!0&&qt.fog!==pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Ot.numPlanes||qt.numIntersection!==Ot.numIntersection)||qt.vertexAlphas!==It||qt.vertexTangents!==Ht||qt.morphTargets!==Yt||qt.morphNormals!==Me||qt.morphColors!==Fe||qt.toneMapping!==he||Lt.isWebGL2===!0&&qt.morphTargetsCount!==ue)&&(Ce=!0):(Ce=!0,qt.__version=G.version);let dr=qt.currentProgram;Ce===!0&&(dr=me(G,U,z));let vu=!1,$s=!1,Pl=!1,je=dr.getUniforms(),pr=qt.uniforms;if(xt.useProgram(dr.program)&&(vu=!0,$s=!0,Pl=!0),G.id!==I&&(I=G.id,$s=!0),vu||v!==E){je.setValue(F,"projectionMatrix",E.projectionMatrix),je.setValue(F,"viewMatrix",E.matrixWorldInverse);let kn=je.map.cameraPosition;kn!==void 0&&kn.setValue(F,bt.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&je.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,$s=!0,Pl=!0)}if(z.isSkinnedMesh){je.setOptional(F,z,"bindMatrix"),je.setOptional(F,z,"bindMatrixInverse");let kn=z.skeleton;kn&&(Lt.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),je.setValue(F,"boneTexture",kn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(je.setOptional(F,z,"batchingTexture"),je.setValue(F,"batchingTexture",z._matricesTexture,T));let Ll=W.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&Lt.isWebGL2===!0)&&Ct.update(z,W,dr),($s||qt.receiveShadow!==z.receiveShadow)&&(qt.receiveShadow=z.receiveShadow,je.setValue(F,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pr.envMap.value=At,pr.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),$s&&(je.setValue(F,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&ce(pr,Pl),pt&&G.fog===!0&&nt.refreshFogUniforms(pr,pt),nt.refreshMaterialUniforms(pr,G,X,H,yt),Ms.upload(F,Oe(qt),pr,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ms.upload(F,Oe(qt),pr,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&je.setValue(F,"center",z.center),je.setValue(F,"modelViewMatrix",z.modelViewMatrix),je.setValue(F,"normalMatrix",z.normalMatrix),je.setValue(F,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let kn=G.uniformsGroups;for(let Il=0,Mm=kn.length;Il<Mm;Il++)if(Lt.isWebGL2){let yu=kn[Il];Zt.update(yu,dr),Zt.bind(yu,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function ce(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ln(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,W){Nt.get(E.texture).__webglTexture=U,Nt.get(E.depthTexture).__webglTexture=W;let G=Nt.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){let W=Nt.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){w=E,C=U,A=W;let G=!0,z=null,pt=!1,Tt=!1;if(E){let At=Nt.get(E);At.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):At.__webglFramebuffer===void 0?T.setupRenderTarget(E):At.__hasExternalTextures&&T.rebindTextures(E,Nt.get(E.texture).__webglTexture,Nt.get(E.depthTexture).__webglTexture);let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Tt=!0);let Ht=Nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?z=Ht[U][W]:z=Ht[U],pt=!0):Lt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?z=Nt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[W]:z=Ht,M.copy(E.viewport),O.copy(E.scissor),N=E.scissorTest}else M.copy(R).multiplyScalar(X).floor(),O.copy(Q).multiplyScalar(X).floor(),N=lt;if(xt.bindFramebuffer(F.FRAMEBUFFER,z)&&Lt.drawBuffers&&G&&xt.drawBuffers(E,z),xt.viewport(M),xt.scissor(O),xt.setScissorTest(N),pt){let At=Nt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,W)}else if(Tt){let At=Nt.get(E.texture),It=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,W||0,It)}I=-1},this.readRenderTargetPixels=function(E,U,W,G,z,pt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Vt=Vt[Tt]),Vt){xt.bindFramebuffer(F.FRAMEBUFFER,Vt);try{let At=E.texture,It=At.format,Ht=At.type;if(It!==ni&&ct.convert(It)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Ht===so&&(vt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Ht!==Ji&&ct.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Yi&&(Lt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&W>=0&&W<=E.height-z&&F.readPixels(U,W,G,z,ct.convert(It),ct.convert(Ht),pt)}finally{let At=w!==null?Nt.get(w).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(E,U,W=0){let G=Math.pow(2,-W),z=Math.floor(U.image.width*G),pt=Math.floor(U.image.height*G);T.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,E.x,E.y,z,pt),xt.unbindTexture()},this.copyTextureToTexture=function(E,U,W,G=0){let z=U.image.width,pt=U.image.height,Tt=ct.convert(W.format),Vt=ct.convert(W.type);T.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,z,pt,Tt,Vt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Tt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,Tt,Vt,U.image),G===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W,G,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=E.max.x-E.min.x+1,Tt=E.max.y-E.min.y+1,Vt=E.max.z-E.min.z+1,At=ct.convert(G.format),It=ct.convert(G.type),Ht;if(G.isData3DTexture)T.setTexture3D(G,0),Ht=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)T.setTexture2DArray(G,0),Ht=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Yt=F.getParameter(F.UNPACK_ROW_LENGTH),Me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Fe=F.getParameter(F.UNPACK_SKIP_PIXELS),he=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES),ue=W.isCompressedTexture?W.mipmaps[z]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Ht,z,U.x,U.y,U.z,pt,Tt,Vt,At,It,ue.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ht,z,U.x,U.y,U.z,pt,Tt,Vt,At,ue.data)):F.texSubImage3D(Ht,z,U.x,U.y,U.z,pt,Tt,Vt,At,It,ue),F.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),z===0&&G.generateMipmaps&&F.generateMipmap(Ht),xt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,xt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Qc?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Er:ad}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Er?qe:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Oc=class extends lo{};Oc.prototype.isWebGL1Renderer=!0;var Na=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Cr=class extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gf=new k,Wf=new k,Xf=new Ge,hc=new ws,ua=new Ar,Fc=class extends Un{constructor(t=new Je,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gf.fromBufferAttribute(e,i-1),Wf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gf.distanceTo(Wf);t.setAttribute("lineDistance",new ii(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=s,t.ray.intersectsSphere(ua)===!1)return;Xf.copy(i).invert(),hc.copy(t.ray).applyMatrix4(Xf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,h=new k,f=new k,u=new k,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let p=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=d){let C=_.getX(x),A=_.getX(x+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,A),hc.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(u);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=d){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),hc.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(u);A<t.near||A>t.far||e.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Yf=new k,qf=new k,As=class extends Fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Yf.fromBufferAttribute(e,i),qf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yf.distanceTo(qf);t.setAttribute("lineDistance",new ii(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bc=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zf=new Ge,zc=new ws,fa=new Ar,da=new k,Rr=class extends Un{constructor(t=new Je,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,t.ray.intersectsSphere(fa)===!1)return;Zf.copy(i).invert(),zc.copy(t.ray).applyMatrix4(Zf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=u,g=d;_<g;_++){let m=c.getX(_);da.fromBufferAttribute(f,m),Jf(da,m,l,i,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=u,g=d;_<g;_++)da.fromBufferAttribute(f,_),Jf(da,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Jf(r,t,e,n,i,s,a){let o=zc.distanceSqToPoint(r);if(o<e){let l=new k;zc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}function pa(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function my(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Cs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qu,endingEnd:Qu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ju:s=t,o=2*e-n;break;case tf:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:a=t,l=2*n-e;break;case tf:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-u*m+2*u*g-u*_,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,x=(-1-d)*m+(1.5+d)*g+.5*_,b=d*m-d*g;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+y*a[c+C]+x*a[l+C]+b*a[f+C];return s}},Vc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*f+a[l+u]*h;return s}},Hc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},oi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pa(e,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pa(t.times,Array),values:pa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case _a:e=this.InterpolantFactoryMethodLinear;break;case zl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&my(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[u+_]||g!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=_a;var Pr=class extends oi{};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ga;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends oi{};Gc.prototype.ValueTypeName="color";var Wc=class extends oi{};Wc.prototype.ValueTypeName="number";var Xc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qi.slerpFlat(s,0,a,c-o,a,c,l);return s}},co=class extends oi{InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.DefaultInterpolation=_a;co.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends oi{};Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=ga;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends oi{};Yc.prototype.ValueTypeName="vector";var qc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},gy=new qc,Zc=class{constructor(t){this.manager=t!==void 0?t:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var th="\\[\\]\\.:\\/",_y=new RegExp("["+th+"]","g"),eh="[^"+th+"]",xy="[^"+th.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",eh),yy=/(WCOD+)?/.source.replace("WCOD",xy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),by=new RegExp("^"+vy+yy+My+Sy+"$"),Ey=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let i=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(t){let e=by.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ey.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Jc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FS=new Float32Array(1);var Oa=class{constructor(t,e,n=0,i=1/0){this.ray=new ws(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return $c(t,this,n,e),n.sort($f),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)$c(t[i],this,n,e);return n.sort($f),n}};function $f(r,t){return r.distance-t.distance}function $c(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)$c(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ls={duration:.5,overwrite:!1,delay:0},yh,nn,be,Xn=1e8,_e=1/Xn,ch=Math.PI*2,Ty=ch/4,Ay=0,Td=Math.sqrt,Cy=Math.cos,Ry=Math.sin,ke=function(t){return typeof t=="string"},Re=function(t){return typeof t=="function"},Ii=function(t){return typeof t=="number"},Ja=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},Mh=function(){return typeof window<"u"},ka=function(t){return Re(t)||ke(t)},Ad=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,hh=/(?:-?\.?\d|\.)+/gi,Sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bh=/[+-]=-?[.\d]+/,Cd=/[^,'"\[\]\s]+/gi,Py=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,we,di,uh,Eh,On={},Wa={},Rd,Pd=function(t){return(Wa=Nr(t,On))&&sn},$a=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},_o=function(t,e){return!e&&console.warn(t)},Ld=function(t,e){return t&&(On[t]=e)&&Wa&&(Wa[t]=e)||On},xo=function(){return 0},Ly={suppressEvents:!0,isStart:!0,kill:!1},Va={suppressEvents:!0,kill:!1},Iy={suppressEvents:!0},wh={},er=[],fh={},Id,Tn={},ih={},xd=30,Ha=[],Th="",Ah=function(t){var e=t[0],n,i;if(mi(e)||Re(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ha.length;i--&&!Ha[i].targetTest(e););n=Ha[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ph(t[i],n)))||t.splice(i,1);return t},nr=function(t){return t._gsap||Ah(Yn(t))[0]._gsap},Ch=function(t,e,n){return(n=t[e])&&Re(n)?t[e]():Ja(n)&&t.getAttribute&&t.getAttribute(e)||n},pn=function(t,e){return(t=t.split(",")).forEach(e)||t},Pe=function(t){return Math.round(t*1e5)/1e5||0},We=function(t){return Math.round(t*1e7)/1e7||0},Fr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Dy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Xa=function(){var t=er.length,e=er.slice(0),n,i;for(fh={},er.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dd=function(t,e,n,i){er.length&&!nn&&Xa(),t.render(e,n,i||nn&&e<0&&(t._initted||t._startAt)),er.length&&!nn&&Xa()},Ud=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Cd).length<2?e:ke(t)?t.trim():t},Nd=function(t){return t},qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Uy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Nr=function(t,e){for(var n in e)t[n]=e[n];return t},vd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ya=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},po=function(t){var e=t.parent||we,n=t.keyframes?Uy(rn(t.keyframes)):qn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ny=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Od=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ka=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ir=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Oy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dh=function(t,e,n,i){return t._startAt&&(nn?t._startAt.revert(Va):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Fy=function r(t){return!t||t._ts&&r(t.parent)},yd=function(t){return t._repeat?Is(t._tTime,t=t.duration()+t._rDelay)*t:0},Is=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},qa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qa=function(t){return t._end=We(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},ja=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=We(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qa(t),n._dirty||Ir(n,t)),t},Fd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=qa(t.rawTime(),e),(!e._dur||Mo(0,e.totalDuration(),n)-e._tTime>_e)&&e.render(n,!0)),Ir(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-_e}},pi=function(t,e,n,i){return e.parent&&ir(e),e._start=We((Ii(n)?n:n||t!==we?Wn(t,n,e):t._time)+e._delay),e._end=We(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Od(t,e,"_first","_last",t._sort?"_start":0),ph(e)||(t._recent=e),i||Fd(t,e),t._ts<0&&ja(t,t._tTime),t},Bd=function(t,e){return(On.ScrollTrigger||$a("scrollTrigger",e))&&On.ScrollTrigger.create(e,t)},zd=function(t,e,n,i,s){if(Dh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Id!==An.frame)return er.push(t),t._lazy=[s,i],1},By=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ph=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},zy=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&By(t)&&!(!t._initted&&ph(t))||(t._ts<0||t._dp._ts<0)&&!ph(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=Mo(0,t._tDur,e),h=Is(l,o),t._yoyo&&h&1&&(a=1-a),h!==Is(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||nn||i||t._zTime===_e||!e&&t._zTime){if(!t._initted&&zd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?_e:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&dh(t,e,n,!0),t._onUpdate&&!n&&Nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ir(t,1),!n&&!nn&&(Nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ky=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ds=function(t,e,n,i){var s=t._repeat,a=We(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:We(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ja(t,t._tTime=t._tDur*o),t.parent&&Qa(t),n||Ir(t.parent,t),t},Md=function(t){return t instanceof $e?Ir(t):Ds(t,t._dur)},Vy={_start:0,endTime:xo,totalDuration:xo},Wn=function r(t,e,n){var i=t.labels,s=t._recent||Vy,a=t.duration()>=Xn?s.endTime(!1):t._dur,o,l,c;return ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},mo=function(t,e,n){var i=Ii(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;a.immediateRender=Cn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ie(e[0],a,e[s+1])},rr=function(t,e){return t||t===0?e(t):e},Mo=function(t,e,n){return n<t?t:n>e?e:n},Ke=function(t,e){return!ke(t)||!(e=Py.exec(t))?"":e[1]},Hy=function(t,e,n){return rr(n,function(i){return Mo(t,e,i)})},mh=[].slice,kd=function(t,e){return t&&mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==di},Gy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ke(i)&&!e||kd(i,1)?(s=n).push.apply(s,Yn(i)):n.push(i)})||n},Yn=function(t,e,n){return be&&!e&&be.selector?be.selector(t):ke(t)&&!n&&(uh||!Us())?mh.call((e||Eh).querySelectorAll(t),0):rn(t)?Gy(t,n):kd(t)?mh.call(t,0):t?[t]:[]},gh=function(t){return t=Yn(t)[0]||_o("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Yn(e,n.querySelectorAll?n:n===t?_o("Invalid scope")||Eh.createElement("div"):t)}},Vd=function(t){return t.sort(function(){return .5-Math.random()})},Hd=function(t){if(Re(t))return t;var e=mi(t)?t:{each:t},n=Dr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return ke(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,d,_){var g=(_||e).length,m=a[g],p,y,x,b,C,A,w,I,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Xn])[1],!v){for(w=-Xn;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,y=v===Xn?0:l?g*f/v-.5:i/v|0,w=0,I=Xn,A=0;A<g;A++)x=A%v-p,b=y-(A/v|0),m[A]=C=c?Math.abs(c==="y"?b:x):Td(x*x+b*b),C>w&&(w=C),C<I&&(I=C);i==="random"&&Vd(m),m.max=w-I,m.min=I,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ke(e.amount||e.each)||0,n=n&&g<0?Kd(n):n}return g=(m[u]-m.min)/m.max||0,We(m.b+(n?n(g):g)*m.v)+m.u}},_h=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=We(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ii(n)?0:Ke(n))}},Gd=function(t,e){var n=rn(t),i,s;return!n&&mi(t)&&(i=n=t.radius||Xn,t.values?(t=Yn(t.values),(s=!Ii(t[0]))&&(i*=i)):t=_h(t.increment)),rr(e,n?Re(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Xn,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-o,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:a,s||h===a||Ii(a)?h:h+Ke(a)}:_h(t))},Wd=function(t,e,n,i){return rr(rn(t)?!e:n===!0?!!(n=0):!i,function(){return rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Wy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Xy=function(t,e){return function(n){return t(parseFloat(n))+(e||Ke(n))}},Yy=function(t,e,n){return Yd(t,e,0,1,n)},Xd=function(t,e,n){return rr(n,function(i){return t[~~e(i)]})},qy=function r(t,e,n){var i=e-t;return rn(t)?Xd(t,r(0,t.length),e):rr(n,function(s){return(i+(s-t)%i)%i+t})},Zy=function r(t,e,n){var i=e-t,s=i*2;return rn(t)?Xd(t,r(0,t.length-1),e):rr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ns=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Cd:hh),n+=t.substr(e,i-e)+Wd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Yd=function(t,e,n,i,s){var a=e-t,o=i-n;return rr(s,function(l){return n+((l-t)/a*o||0)})},Jy=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=ke(t),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(rn(t)&&!rn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=Nr(rn(t)?[]:{},t));if(!h){for(l in e)Lh.call(o,t,l,"get",e[l]);s=function(_){return Oh(_,o)||(a?t.p:t)}}}return rr(n,s)},Sd=function(t,e,n){var i=t.labels,s=Xn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Nn=function(t,e,n){var i=t.vars,s=i[e],a=be,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&er.length&&Xa(),o&&(be=o),h=l?s.apply(c,l):s.call(c),be=a,h},uo=function(t){return ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!nn),t.progress()<1&&Nn(t,"onInterrupt"),t},Ps,qd=[],Zd=function(t){if(t)if(t=!t.name&&t.default||t,Mh()||t.headless){var e=t.name,n=Re(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:xo,render:Oh,add:Lh,kill:uM,modifier:hM,rawVars:0},a={targetTest:0,get:0,getSetter:tl,aliases:{},register:0};if(Us(),t!==i){if(Tn[e])return;qn(i,qn(Ya(t,s),a)),Nr(i.prototype,Nr(s,Ya(t,a))),Tn[i.prop=e]=i,t.targetTest&&(Ha.push(i),wh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ld(e,i),t.register&&t.register(sn,i,mn)}else qd.push(t)},pe=255,fo={aqua:[0,pe,pe],lime:[0,pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pe],navy:[0,0,128],white:[pe,pe,pe],olive:[128,128,0],yellow:[pe,pe,0],orange:[pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pe,0,0],pink:[pe,192,203],cyan:[0,pe,pe],transparent:[pe,pe,pe,0]},rh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*pe+.5|0},Jd=function(t,e,n){var i=t?Ii(t)?[t>>16,t>>8&pe,t&pe]:0:fo.black,s,a,o,l,c,h,f,u,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fo[t])i=fo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&pe,i&pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&pe,t&pe]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(hh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=rh(l+1/3,s,a),i[1]=rh(l,s,a),i[2]=rh(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Sh),n&&i.length<4&&(i[3]=1),i}else i=t.match(hh)||fo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/pe,a=i[1]/pe,o=i[2]/pe,f=Math.max(s,a,o),u=Math.min(s,a,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},$d=function(t){var e=[],n=[],i=-1;return t.split(Li).forEach(function(s){var a=s.match(Or)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},bd=function(t,e,n){var i="",s=(t+i).match(Li),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Jd(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=$d(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Li,"1").split(Or),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Li),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Li=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),$y=/hsl[a]?\(/,Rh=function(t){var e=t.join(" "),n;if(Li.lastIndex=0,Li.test(e))return n=$y.test(e),t[1]=bd(t[1],n),t[0]=bd(t[0],n,$d(t[1])),!0},vo,An=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,f,u,d,_=function g(m){var p=r()-i,y=m===!0,x,b,C,A;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,x=C-a,(x>0||y)&&(A=++f.frame,u=C-f.time*1e3,f.time=C=C/1e3,a+=x+(x>=s?4:s-x),b=1),y||(l=c(g)),b)for(d=0;d<o.length;d++)o[d](C,u,A,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Rd&&(!uh&&Mh()&&(di=uh=window,Eh=di.document||{},On.gsap=sn,(di.gsapVersions||(di.gsapVersions=[])).push(sn.version),Pd(Wa||di.GreenSockGlobals||!di.gsap&&di||{}),qd.forEach(Zd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,a-f.time*1e3+1|0)},vo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),vo=0,c=xo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,y){var x=p?function(b,C,A,w){m(b,C,A,w),f.remove(x)}:m;return f.remove(m),o[y?"unshift":"push"](x),Us(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),Us=function(){return!vo&&An.wake()},se={},Ky=/^[\d.\-M][\d.\-,\s]/,Qy=/["']/g,jy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Qy,"").trim():+c,i=l.substr(o+1).trim();return e},tM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},eM=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[jy(e[1])]:tM(t).split(",").map(Ud)):se._CE&&Ky.test(t)?se._CE("",t):n},Kd=function(t){return function(e){return 1-t(1-e)}},Qd=function r(t,e){for(var n=t._first,i;n;)n instanceof $e?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Dr=function(t,e){return t&&(Re(t)?t:se[t]||eM(t))||e},Br=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return pn(t,function(o){se[o]=On[o]=s,se[a=o.toLowerCase()]=n;for(var l in s)se[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[o+"."+l]=s[l]}),s},jd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},sh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/ch*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ry((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:jd(o);return s=ch/s,l.config=function(c,h){return r(t,c,h)},l},oh=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(t,s)},i};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Br(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Br("Elastic",sh("in"),sh("out"),sh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Br("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Br("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Br("Circ",function(r){return-(Td(1-r*r)-1)});Br("Sine",function(r){return r===1?1:-Cy(r*Ty)+1});Br("Back",oh("in"),oh("out"),oh());se.SteppedEase=se.steps=On.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-_e;return function(o){return((i*Mo(0,a,o)|0)+s)*n}}};Ls.ease=se["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Th+=r+","+r+"Params,"});var Ph=function(t,e){this.id=Ay++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ch,this.set=e?e.getSetter:tl},yo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ds(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),vo||An.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,n),!s._dp||s.parent||Fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_e||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_e?0:this._rts,this.totalTime(Mo(-Math.abs(this._delay),this._tDur,s),i!==!1),Qa(this),Oy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_e&&(this._tTime-=_e)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Iy);var i=nn;return nn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Md(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Md(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Wn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_e)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Re(n)?n:Nd,o=function(){var c=i.then;i.then=null,Re(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){uo(this)},r})();qn(yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var $e=(function(r){wd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),we&&pi(n.parent||we,Pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bd(Pi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return mo(0,arguments,this),this},e.from=function(i,s,a){return mo(1,arguments,this),this},e.fromTo=function(i,s,a,o){return mo(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ie(i,s,Wn(this,a),1),this},e.call=function(i,s,a){return pi(this,Ie.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ie(i,a,Wn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,po(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,f){return o.startAt=a,po(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:We(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,_,g,m,p,y,x,b,C,A,w;if(this!==we&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,b=this._start,x=this._ts,p=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(u=We(h%m),h===l?(g=this._repeat,u=c):(g=~~(h/m),g&&g===h/m&&(u=c,g--),u>c&&(u=c)),C=Is(this._tTime,m),!o&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),A&&g&1&&(u=c-u,w=1),g!==C&&!this._lock){var I=A&&C&1,v=I===(A&&g&1);if(g<C&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(w?0:We(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Qd(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ky(this,We(o),We(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!g&&(Nn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,a),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-_e);break}}d=_}else{d=this._last;for(var M=i<0?i:u;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,a||nn&&(d._initted||d._startAt)),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=M?-_e:_e);break}}d=_}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-_e)._zTime=u>=o?1:-1,this._ts))return this._start=b,Qa(this),this.render(i,s,a);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ir(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Nn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Ii(s)||(s=Wn(this,s,i)),!(i instanceof yo)){if(rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ke(i))return this.addLabel(i,s);if(Re(i))i=Ie.delayedCall(0,i);else return this}return this!==i?pi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ie?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ke(i)?this.removeLabel(i):Re(i)?this.killTweensOf(i):(Ka(this,i),i===this._recent&&(this._recent=this._last),Ir(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=We(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Wn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ie.delayedCall(0,s||xo,a);return o.data="isPause",this._hasPause=1,pi(this,o,Wn(this,i))},e.removePause=function(i){var s=this._first;for(i=Wn(this,i);s;)s._start===i&&s.data==="isPause"&&ir(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)tr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Yn(i),l=this._first,c=Ii(s),h;l;)l instanceof Ie?Dy(l._targets,o)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Wn(a,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,_=Ie.to(a,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_e,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ds(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,qn({startAt:{time:Wn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sd(this,Wn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sd(this,Wn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_e)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ir(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ir(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Xn,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,pi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ds(a,a===we&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(we._ts&&(Dd(we,qa(i,we)),Id=An.frame),An.frame>=xd){xd+=Rn.autoSleep||120;var s=we._first;if((!s||!s._ts)&&Rn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},t})(yo);qn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var nM=function(t,e,n,i,s,a,o){var l=new mn(this._pt,t,e,0,1,Nh,null,s),c=0,h=0,f,u,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ns(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),u=n.match(nh)||[];f=nh.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Fr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=nh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(bh.test(i)||p)&&(l.e=0),this._pt=l,l},Lh=function(t,e,n,i,s,a,o,l,c,h){Re(i)&&(i=i(s||0,t,a));var f=t[e],u=n!=="get"?n:Re(f)?c?t[e.indexOf("set")||!Re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Re(f)?c?aM:np:Uh,_;if(ke(i)&&(~i.indexOf("random(")&&(i=Ns(i)),i.charAt(1)==="="&&(_=Fr(u,i)+(Ke(u)||0),(_||_===0)&&(i=_))),!h||u!==i||xh)return!isNaN(u*i)&&i!==""?(_=new mn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?cM:ip,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&$a(e,i),nM.call(this,t,e,u,i,d,l||Rn.stringFilter,c))},iM=function(t,e,n,i,s){if(Re(t)&&(t=go(t,s,e,n,i)),!mi(t)||t.style&&t.nodeType||rn(t)||Ad(t))return ke(t)?go(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=go(t[o],s,e,n,i);return a},Ih=function(t,e,n,i,s,a){var o,l,c,h;if(Tn[t]&&(o=new Tn[t]).init(s,o.rawVars?e[t]:iM(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new mn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ps))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},tr,xh,Dh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!yh,b=t.timeline,C,A,w,I,v,M,O,N,tt,L,D,H,X;if(b&&(!u||!s)&&(s="none"),t._ease=Dr(s,Ls.ease),t._yEase=f?Kd(Dr(f===!0?s:f,Ls.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!b&&!!i.runBackwards,!b||u&&!i.stagger){if(N=m[0]?nr(m[0]).harness:0,H=N&&i[N.prop],C=Ya(i,wh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?Va:Ly),g._lazy=0),a){if(ir(t._startAt=Ie.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn||!o&&!d)&&t._startAt.revert(Va),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),w=qn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Cn(l),immediateRender:o,stagger:0,parent:p},C),H&&(w[N.prop]=H),ir(t._startAt=Ie.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn?t._startAt.revert(Va):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,_e,_e);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Cn(l)||l&&!_,A=0;A<m.length;A++){if(v=m[A],O=v._gsap||Ah(m)[A]._gsap,t._ptLookup[A]=L={},fh[O.id]&&er.length&&Xa(),D=y===m?A:y.indexOf(v),N&&(tt=new N).init(v,H||C,t,D,y)!==!1&&(t._pt=I=new mn(t._pt,v,tt.name,0,1,tt.render,tt,0,tt.priority),tt._props.forEach(function(q){L[q]=I}),tt.priority&&(M=1)),!N||H)for(w in C)Tn[w]&&(tt=Ih(w,C,t,D,v,y))?tt.priority&&(M=1):L[w]=I=Lh.call(t,v,w,"get",C[w],D,y,0,i.stringFilter);t._op&&t._op[A]&&t.kill(v,t._op[A]),x&&t._pt&&(tr=t,we.killTweensOf(v,L,t.globalTime(e)),X=!t.parent,tr=0),t._pt&&l&&(fh[O.id]=1)}M&&Fh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,u&&e<=0&&b.render(Xn,!0,!0)},rM=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return xh=1,t.vars[e]="+=0",Dh(t,o),xh=0,l?_o(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Pe(n)+Ke(f.e)),f.b&&(f.b=h.s+Ke(f.b))},sM=function(t,e){var n=t[0]?nr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Nr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},oM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(rn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},go=function(t,e,n,i,s){return Re(t)?t.call(e,n,i,s):ke(t)&&~t.indexOf("random(")?Ns(t):t},tp=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ep={};pn(tp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ep[r]=1});var Ie=(function(r){wd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:po(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||we,x=(rn(n)||Ad(n)?Ii(n[0]):"length"in i)?[n]:Yn(n),b,C,A,w,I,v,M,O;if(o._targets=x.length?Ah(x):_o("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||u||ka(c)||ka(h)){if(i=o.vars,b=o.timeline=new $e({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),b.kill(),b.parent=b._dp=Pi(o),b._start=0,u||ka(c)||ka(h)){if(w=x.length,M=u&&Hd(u),mi(u))for(I in u)~tp.indexOf(I)&&(O||(O={}),O[I]=u[I]);for(C=0;C<w;C++)A=Ya(i,ep),A.stagger=0,p&&(A.yoyoEase=p),O&&Nr(A,O),v=x[C],A.duration=+go(c,Pi(o),C,v,x),A.delay=(+go(h,Pi(o),C,v,x)||0)-o._delay,!u&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),b.to(v,A,M?M(C,v,x):0),b._ease=se.none;b.duration()?c=h=0:o.timeline=0}else if(_){po(qn(b.vars.defaults,{ease:"none"})),b._ease=Dr(_.ease||i.ease||"none");var N=0,tt,L,D;if(rn(_))_.forEach(function(H){return b.to(x,H,">")}),b.duration();else{A={};for(I in _)I==="ease"||I==="easeEach"||oM(I,_[I],A,_.easeEach);for(I in A)for(tt=A[I].sort(function(H,X){return H.t-X.t}),N=0,C=0;C<tt.length;C++)L=tt[C],D={ease:L.e,duration:(L.t-(C?tt[C-1].t:0))/100*c},D[I]=L.v,b.to(x,D,N),N+=D.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return d===!0&&!yh&&(tr=Pi(o),we.killTweensOf(x),tr=0),pi(y,Pi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===We(y._time)&&Cn(f)&&Fy(Pi(o))&&y.data!=="nested")&&(o._tTime=-_e,o.render(Math.max(0,-h)||0)),m&&Bd(Pi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-_e&&!h?l:i<_e?0:i,u,d,_,g,m,p,y,x,b;if(!c)zy(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(u=We(f%g),f===l?(_=this._repeat,u=c):(_=~~(f/g),_&&_===We(f/g)&&(u=c,_--),u>c&&(u=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,u=c-u),m=Is(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(x&&this._yEase&&Qd(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(We(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(zd(this,h?i:u,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(u/c),this._from&&(this.ratio=y=1-y),u&&!o&&!s&&!_&&(Nn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&dh(this,i,s,a),Nn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&dh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ir(this,1),!s&&!(h&&!o)&&(f||o||p)&&(Nn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){vo||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Dh(this,c),h=this._ease(c/this._dur),rM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ja(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||uo(this),this.parent&&a!==this.timeline.totalDuration()&&Ds(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Yn(i):o,c=this._ptLookup,h=this._pt,f,u,d,_,g,m,p;if((!s||s==="all")&&Ny(o,l))return s==="all"&&(this._pt=0),uo(this);for(f=this._op=this._op||[],s!=="all"&&(ke(s)&&(g={},pn(s,function(y){return g[y]=1}),s=g),s=sM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],s==="all"?(f[p]=s,_=u,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ka(this,m,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&uo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return mo(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return mo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return we.killTweensOf(i,s,a)},t})(yo);qn(Ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(r){Ie[r]=function(){var t=new $e,e=mh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Uh=function(t,e,n){return t[e]=n},np=function(t,e,n){return t[e](n)},aM=function(t,e,n,i){return t[e](i.fp,n)},lM=function(t,e,n){return t.setAttribute(e,n)},tl=function(t,e){return Re(t[e])?np:Ja(t[e])&&t.setAttribute?lM:Uh},ip=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},cM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Nh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Oh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hM=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},uM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ka(this,e,"_pt"):e.dep||(n=1),e=i;return!n},fM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},mn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ip,this.d=l||this,this.set=c||Uh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fM,this.m=n,this.mt=s,this.tween=i},r})();pn(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wh[r]=1});On.TweenMax=On.TweenLite=Ie;On.TimelineLite=On.TimelineMax=$e;we=new $e({sortChildren:!1,defaults:Ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Rh;var Ur=[],Ga={},dM=[],Ed=0,pM=0,ah=function(t){return(Ga[t]||dM).map(function(e){return e()})},vh=function(){var t=Date.now(),e=[];t-Ed>2&&(ah("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=di.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ah("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ed=t,ah("matchMedia"))},rp=(function(){function r(e,n){this.selector=n&&gh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Re(n)&&(s=i,i=n,n=Re);var a=this,o=function(){var c=be,h=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=gh(s)),be=a,f=i.apply(a,arguments),Re(f)&&a._r.push(f),be=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===Re?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ie)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ur.length;a--;)Ur[a].id===this.id&&Ur.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),mM=(function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){mi(n)||(n={matches:n});var a=new rp(0,s||this.scope),o=a.conditions={},l,c,h;be&&!a.selector&&(a.selector=be.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=di.matchMedia(n[c]),l&&(Ur.indexOf(a)<0&&Ur.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(vh):l.addEventListener("change",vh)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Za={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zd(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return we.getTweensOf(t,e)},getProperty:function(t,e,n,i){ke(t)&&(t=Yn(t)[0]);var s=nr(t||{}).get,a=n?Nd:Ud;return n==="native"&&(n=""),t&&(e?a((Tn[e]&&Tn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Tn[o]&&Tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Yn(t),t.length>1){var i=t.map(function(h){return sn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var a=Tn[e],o=nr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;Ps._pt=0,f.init(t,n?h+n:h,Ps,0,[t]),f.render(1,f),Ps._pt&&Oh(1,Ps)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=sn.to(t,Nr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return we.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Dr(t.ease,Ls.ease)),vd(Ls,t||{})},config:function(t){return vd(Rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Tn[o]&&!On[o]&&_o(e+" effect requires "+o+" plugin.")}),ih[e]=function(o,l,c){return n(Yn(o),qn(l||{},s),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(ih[e](o,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=Dr(e)},parseEase:function(t,e){return arguments.length?Dr(t,e):se},getById:function(t){return we.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),we.remove(n),n._dp=0,n._time=n._tTime=we._time,i=we._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ie&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=s;return pi(we,n,0),n},context:function(t,e){return t?new rp(t,e):be},matchMedia:function(t){return new mM(t)},matchMediaRefresh:function(){return Ur.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||vh()},addEventListener:function(t,e){var n=Ga[t]||(Ga[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ga[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:qy,wrapYoyo:Zy,distribute:Hd,random:Wd,snap:Gd,normalize:Yy,getUnit:Ke,clamp:Hy,splitColor:Jd,toArray:Yn,selector:gh,mapRange:Yd,pipe:Wy,unitize:Xy,interpolate:Jy,shuffle:Vd},install:Pd,effects:ih,ticker:An,updateRoot:$e.updateRoot,plugins:Tn,globalTimeline:we,core:{PropTween:mn,globals:Ld,Tween:Ie,Timeline:$e,Animation:yo,getCache:nr,_removeLinkedListItem:Ka,reverting:function(){return nn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return yh=t}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Za[r]=Ie[r]});An.add($e.updateRoot);Ps=Za.to({},{duration:0});var gM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_M=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=gM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},lh=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ke(s)&&(l={},pn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_M(o,s)}}}},sn=Za.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},lh("roundProps",_h),lh("modifiers"),lh("snap",Gd))||Za;Ie.version=$e.version=sn.version="3.12.5";Rd=1;Mh()&&Us();var xM=se.Power0,vM=se.Power1,yM=se.Power2,MM=se.Power3,SM=se.Power4,bM=se.Linear,EM=se.Quad,wM=se.Cubic,TM=se.Quart,AM=se.Quint,CM=se.Strong,RM=se.Elastic,PM=se.Back,LM=se.SteppedEase,IM=se.Bounce,DM=se.Sine,UM=se.Expo,NM=se.Circ;var sp,sr,Fs,Wh,Hr,OM,op,Xh,FM=function(){return typeof window<"u"},Ui={},Vr=180/Math.PI,Bs=Math.PI/180,Os=Math.atan2,ap=1e8,Yh=/([A-Z])/g,BM=/(left|right|width|margin|padding|x)/i,zM=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},VM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},HM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},GM=function(t,e,n){return t.style[e]=n},WM=function(t,e,n){return t.style.setProperty(e,n)},XM=function(t,e,n){return t._gsap[e]=n},YM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ZM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Te="transform",Pn=Te+"Origin",JM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ui&&s){if(this.tfm=this.tfm||{},t!=="transform")t=gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Di(i,o)}):this.tfm[t]=a.x?a[t]:Di(i,t),t===Pn&&(this.tfm.zOrigin=a.zOrigin);else return gi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Te)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Te}(s||e)&&this.props.push(t,e,s[t])},gp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$M=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Xh(),(!s||!s.isStart)&&!n[Te]&&(gp(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_p=function(t,e){var n={target:t,props:[],revert:$M,save:JM};return t._gsap||sn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},xp,Vh=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},_i=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,zs(e)||e,1)||""},lp="O,Moz,ms,Ms,Webkit".split(","),zs=function(t,e,n){var i=e||Hr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(lp[a]+t in s););return a<0?null:(a===3?"ms":a>=0?lp[a]:"")+t},Hh=function(){FM()&&window.document&&(sp=window,sr=sp.document,Fs=sr.documentElement,Hr=Vh("div")||{style:{}},OM=Vh("div"),Te=zs(Te),Pn=Te+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xp=!!zs("perspective"),Xh=sn.core.reverting,Wh=1)},Bh=function r(t){var e=Vh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Fs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Fs.removeChild(e),this.style.cssText=s,a},cp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vp=function(t){var e;try{e=t.getBBox()}catch{e=Bh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Bh||(e=Bh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+cp(t,["x","cx","x1"])||0,y:+cp(t,["y","cy","y1"])||0,width:0,height:0}:e},yp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vp(t))},Gr=function(t,e){if(e){var n=t.style,i;e in Ui&&e!==Pn&&(e=Te),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(e)}},or=function(t,e,n,i,s,a){var o=new mn(t._pt,e,n,0,1,a?mp:pp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},hp={deg:1,rad:1,turn:1},KM={grid:1,flex:1},ar=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hr.style,l=BM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||hp[i]||hp[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&yp(t),(d||a==="%")&&(Ui[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Pe(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(u?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===An.time&&!m.uncache)return Pe(s/m.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[h],y?t.style[e]=y:Gr(t,e)}else(d||a==="%")&&!KM[_i(g,"display")]&&(o.position=_i(t,"position")),g===t&&(o.position="static"),g.appendChild(Hr),_=Hr[h],g.removeChild(Hr),o.position="absolute";return l&&d&&(m=nr(g),m.time=An.time,m.width=g[h]),Pe(u?_*s/f:_&&s?f/_*s:0)},Di=function(t,e,n,i){var s;return Wh||Hh(),e in gi&&e!=="transform"&&(e=gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ui[e]&&e!=="transform"?(s=Eo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:nl(_i(t,Pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=el[e]&&el[e](t,e,n)||_i(t,e)||Ch(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(t,e,s,n)+n:s},QM=function(t,e,n,i){if(!n||n==="none"){var s=zs(e,t,1),a=s&&_i(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=_i(t,"borderTopColor"))}var o=new mn(this._pt,t.style,e,0,1,Nh),l=0,c=0,h,f,u,d,_,g,m,p,y,x,b,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=_i(t,e)||i,g?t.style[e]=g:Gr(t,e)),h=[n,i],Rh(h),n=h[0],i=h[1],u=n.match(Or)||[],C=i.match(Or)||[],C.length){for(;f=Or.exec(i);)m=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(d=parseFloat(g)||0,b=g.substr((d+"").length),m.charAt(1)==="="&&(m=Fr(d,m)+b),p=parseFloat(m),x=m.substr((p+"").length),l=Or.lastIndex-x.length,x||(x=x||Rn.units[e]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(d=ar(t,e,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?mp:pp;return bh.test(i)&&(o.e=0),this._pt=o,o},up={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=up[n]||n,e[1]=up[i]||i,e.join(" ")},tS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ui[o]&&(l=1,o=o==="transformOrigin"?Pn:Te),Gr(n,o);l&&(Gr(n,Te),a&&(a.svg&&n.removeAttribute("transform"),Eo(n,1),a.uncache=1,gp(i)))}},el={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new mn(t._pt,e,n,0,0,tS);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},bo=[1,0,0,1,0,0],Mp={},Sp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fp=function(t){var e=_i(t,Te);return Sp(e)?bo:e.substr(7).match(Sh).map(Pe)},qh=function(t,e){var n=t._gsap||nr(t),i=t.style,s=fp(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bo:s):(s===bo&&!t.offsetParent&&t!==Fs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Fs.appendChild(t)),s=fp(t),l?i.display=l:Gr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Fs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gh=function(t,e,n,i,s,a){var o=t._gsap,l=s||qh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],x=e.split(" "),b=parseFloat(x[0])||0,C=parseFloat(x[1])||0,A,w,I,v;n?l!==bo&&(w=d*m-_*g)&&(I=b*(m/w)+C*(-g/w)+(g*y-m*p)/w,v=b*(-_/w)+C*(d/w)-(d*y-_*p)/w,b=I,C=v):(A=vp(t),b=A.x+(~x[0].indexOf("%")?b/100*A.width:b),C=A.y+(~(x[1]||x[0]).indexOf("%")?C/100*A.height:C)),i||i!==!1&&o.smooth?(p=b-c,y=C-h,o.xOffset=f+(p*d+y*g)-p,o.yOffset=u+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Pn]="0px 0px",a&&(or(a,o,"xOrigin",c,b),or(a,o,"yOrigin",h,C),or(a,o,"xOffset",f,o.xOffset),or(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+C)},Eo=function(t,e){var n=t._gsap||new Ph(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=_i(t,Pn)||"0",h,f,u,d,_,g,m,p,y,x,b,C,A,w,I,v,M,O,N,tt,L,D,H,X,q,Y,R,Q,lt,J,K,at;return h=f=u=g=m=p=y=x=b=0,d=_=1,n.svg=!!(t.getCTM&&yp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Te]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Te]!=="none"?l[Te]:"")),i.scale=i.rotate=i.translate="none"),w=qh(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Gh(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,A=n.yOrigin||0,w!==bo&&(O=w[0],N=w[1],tt=w[2],L=w[3],h=D=w[4],f=H=w[5],w.length===6?(d=Math.sqrt(O*O+N*N),_=Math.sqrt(L*L+tt*tt),g=O||N?Os(N,O)*Vr:0,y=tt||L?Os(tt,L)*Vr+g:0,y&&(_*=Math.abs(Math.cos(y*Bs))),n.svg&&(h-=C-(C*O+A*tt),f-=A-(C*N+A*L))):(at=w[6],J=w[7],R=w[8],Q=w[9],lt=w[10],K=w[11],h=w[12],f=w[13],u=w[14],I=Os(at,lt),m=I*Vr,I&&(v=Math.cos(-I),M=Math.sin(-I),X=D*v+R*M,q=H*v+Q*M,Y=at*v+lt*M,R=D*-M+R*v,Q=H*-M+Q*v,lt=at*-M+lt*v,K=J*-M+K*v,D=X,H=q,at=Y),I=Os(-tt,lt),p=I*Vr,I&&(v=Math.cos(-I),M=Math.sin(-I),X=O*v-R*M,q=N*v-Q*M,Y=tt*v-lt*M,K=L*M+K*v,O=X,N=q,tt=Y),I=Os(N,O),g=I*Vr,I&&(v=Math.cos(I),M=Math.sin(I),X=O*v+N*M,q=D*v+H*M,N=N*v-O*M,H=H*v-D*M,O=X,D=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Pe(Math.sqrt(O*O+N*N+tt*tt)),_=Pe(Math.sqrt(H*H+at*at)),I=Os(D,H),y=Math.abs(I)>2e-4?I*Vr:0,b=K?1/(K<0?-K:K):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sp(_i(t,Te)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Pe(d),n.scaleY=Pe(_),n.rotation=Pe(g)+o,n.rotationX=Pe(m)+o,n.rotationY=Pe(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=nl(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?nS:xp?bp:eS,n.uncache=0,n},nl=function(t){return(t=t.split(" "))[0]+" "+t[1]},zh=function(t,e,n){var i=Ke(e);return Pe(parseFloat(e)+parseFloat(ar(t,"x",n+"px",i)))+i},eS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bp(t,e)},zr="0deg",So="0px",kr=") ",bp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,b="",C=p==="auto"&&t&&t!==1||p===!0;if(x&&(f!==zr||h!==zr)){var A=parseFloat(h)*Bs,w=Math.sin(A),I=Math.cos(A),v;A=parseFloat(f)*Bs,v=Math.cos(A),a=zh(y,a,w*v*-x),o=zh(y,o,-Math.sin(A)*-x),l=zh(y,l,I*v*-x+x)}m!==So&&(b+="perspective("+m+kr),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(C||a!==So||o!==So||l!==So)&&(b+=l!==So||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kr),c!==zr&&(b+="rotate("+c+kr),h!==zr&&(b+="rotateY("+h+kr),f!==zr&&(b+="rotateX("+f+kr),(u!==zr||d!==zr)&&(b+="skew("+u+", "+d+kr),(_!==1||g!==1)&&(b+="scale("+_+", "+g+kr),y.style[Te]=b||"translate(0, 0)"},nS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),b=parseFloat(o),C,A,w,I,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Bs,c*=Bs,C=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-u,I=Math.cos(l-c)*u,c&&(h*=Bs,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,I*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),C*=v,A*=v)),C=Pe(C),A=Pe(A),w=Pe(w),I=Pe(I)):(C=f,I=u,A=w=0),(x&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=ar(d,"x",a,"px"),b=ar(d,"y",o,"px")),(_||g||m||p)&&(x=Pe(x+_-(_*C+g*w)+m),b=Pe(b+g-(_*A+g*I)+p)),(i||s)&&(v=d.getBBox(),x=Pe(x+i/100*v.width),b=Pe(b+s/100*v.height)),v="matrix("+C+","+A+","+w+","+I+","+x+","+b+")",d.setAttribute("transform",v),y&&(d.style[Te]=v)},iS=function(t,e,n,i,s){var a=360,o=ke(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vr:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*ap)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ap)%a-~~(c/a)*a)),t._pt=u=new mn(t._pt,e,n,i,c,kM),u.e=h,u.u="deg",t._props.push(n),u},dp=function(t,e){for(var n in e)t[n]=e[n];return t},rS=function(t,e,n){var i=dp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Te]=e,o=Eo(n,1),Gr(n,Te),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Te],a[Te]=e,o=Eo(n,1),a[Te]=c);for(l in Ui)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Ke(c),_=Ke(h),f=d!==_?ar(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new mn(t._pt,o,l,f,u-f,kh),t._pt.u=_||0,t._props.push(l));dp(o,i)};pn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});el[t>1?"border"+r:r]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=a.map(function(_){return Di(o,_,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,d,f)}});var Zh={name:"css",register:Hh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,d,_,g,m,p,y,x,b,C,A,w,I;Wh||Hh(),this.styles=this.styles||_p(t),I=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Tn[g]&&Ih(g,e,n,i,t,s)))){if(d=typeof h,_=el[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ns(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Li.lastIndex=0,Li.test(c)||(m=Ke(c),p=Ke(h)),p?m!==p&&(c=ar(t,g,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),I.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],ke(c)&&~c.indexOf("random(")&&(c=Ns(c)),Ke(c+"")||c==="auto"||(c+=Rn.units[g]||Ke(Di(t,g))||""),(c+"").charAt(1)==="="&&(c=Di(t,g))):c=Di(t,g),u=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),g in gi&&(g==="autoAlpha"&&(u===1&&Di(t,"visibility")==="hidden"&&f&&(u=0),I.push("visibility",0,o.visibility),or(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ui,x){if(this.styles.save(g),b||(C=t._gsap,C.renderTransform&&!e.parseTransform||Eo(t,e.parseTransform),A=e.smoothOrigin!==!1&&C.smooth,b=this._pt=new mn(this._pt,o,Te,0,1,C.renderTransform,C,0,-1),b.dep=1),g==="scale")this._pt=new mn(this._pt,C,"scaleY",C.scaleY,(y?Fr(C.scaleY,y+f):f)-C.scaleY||0,kh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Pn,0,o[Pn]),h=jM(h),C.svg?Gh(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&or(this,C,"zOrigin",C.zOrigin,p),or(this,o,g,nl(c),nl(h)));continue}else if(g==="svgOrigin"){Gh(t,h,1,A,0,this);continue}else if(g in Mp){iS(this,C,g,u,y?Fr(u,y+h):h);continue}else if(g==="smoothOrigin"){or(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){rS(this,h,t);continue}}else g in o||(g=zs(g)||g);if(x||(f||f===0)&&(u||u===0)&&!zM.test(h)&&g in o)m=(c+"").substr((u+"").length),f||(f=0),p=Ke(h)||(g in Rn.units?Rn.units[g]:m),m!==p&&(u=ar(t,g,c,p)),this._pt=new mn(this._pt,x?C:o,g,u,(y?Fr(u,y+f):f)-u,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?HM:kh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=VM);else if(g in o)QM.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,s);else if(g!=="parseTransform"){$a(g,h);continue}x||(g in o?I.push(g,0,o[g]):I.push(g,1,c||t[g])),a.push(g)}}w&&Fh(this)},render:function(t,e){if(e.tween._time||!Xh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Di,aliases:gi,getSetter:function(t,e,n){var i=gi[e];return i&&i.indexOf(",")<0&&(e=i),e in Ui&&e!==Pn&&(t._gsap.x||Di(t,"x"))?n&&op===n?e==="scale"?YM:XM:(op=n||{})&&(e==="scale"?qM:ZM):t.style&&!Ja(t.style[e])?GM:~e.indexOf("-")?WM:tl(t,e)},core:{_removeProperty:Gr,_getMatrix:qh}};sn.utils.checkPrefix=zs;sn.core.getStyleSaver=_p;(function(r,t,e,n){var i=pn(r+","+t+","+e,function(s){Ui[s]=1});pn(t,function(s){Rn.units[s]="deg",Mp[s]=1}),gi[i[13]]=r+","+t,pn(n,function(s){var a=s.split(":");gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Rn.units[r]="px"});sn.registerPlugin(Zh);var Jh=sn.registerPlugin(Zh)||sn,XS=Jh.core.Tween;function Ep(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sS(r,t,e){return t&&Ep(r.prototype,t),e&&Ep(r,e),r}var Qe,sl,oS,Fn,lr,cr,Vs,Tp,Wr,To,Ap,Ni,ai,Cp,Rp=function(){return Qe||typeof window<"u"&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},Pp=1,ks=[],jt=[],li=[],Ao=Date.now,$h=function(t,e){return e},aS=function(){var t=To.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,jt),i.push.apply(i,li),jt=n,li=i,$h=function(a,o){return e[a](o)}},Fi=function(t,e){return~li.indexOf(t)&&li[li.indexOf(t)+1][e]},Co=function(t){return!!~Ap.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},il="scrollLeft",rl="scrollTop",Kh=function(){return Ni&&Ni.isPressed||jt.cache++},ol=function(t,e){var n=function i(s){if(s||s===0){Pp&&(Fn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=jt.cache,a&&$h("ss",s)}else(e||jt.cache!==i.cacheID||$h("ref"))&&(i.cacheID=jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},on={s:il,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ol(function(r){return arguments.length?Fn.scrollTo(r,Ue.sc()):Fn.pageXOffset||lr[il]||cr[il]||Vs[il]||0})},Ue={s:rl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:on,sc:ol(function(r){return arguments.length?Fn.scrollTo(on.sc(),r):Fn.pageYOffset||lr[rl]||cr[rl]||Vs[rl]||0})},xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Qe.utils.toArray)(t)[0]||(typeof t=="string"&&Qe.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Oi=function(t,e){var n=e.s,i=e.sc;Co(t)&&(t=lr.scrollingElement||cr);var s=jt.indexOf(t),a=i===Ue.sc?1:2;!~s&&(s=jt.push(t)-1),jt[s+a]||_n(t,"scroll",Kh);var o=jt[s+a],l=o||(jt[s+a]=ol(Fi(t,n),!0)||(Co(t)?i:ol(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Qe.getProperty(t,"scrollBehavior")==="smooth"),l},al=function(t,e,n){var i=t,s=t,a=Ao(),o=a,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Ao();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},u=function(_){var g=o,m=s,p=Ao();return(_||_===0)&&_!==i&&h(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:h,reset:f,getVelocity:u}},wo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Lp=function(){To=Qe.core.globals().ScrollTrigger,To&&To.core&&aS()},Ip=function(t){return Qe=t||Rp(),!sl&&Qe&&typeof document<"u"&&document.body&&(Fn=window,lr=document,cr=lr.documentElement,Vs=lr.body,Ap=[Fn,lr,cr,Vs],oS=Qe.utils.clamp,Cp=Qe.core.context||function(){},Wr="onpointerenter"in Vs?"pointer":"mouse",Tp=Le.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Le.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pp=0},500),Lp(),sl=1),sl};on.op=Ue;jt.cache=0;var Le=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){sl||Ip(Qe)||console.warn("Please gsap.registerPlugin(Observer)"),To||Lp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,b=n.onRelease,C=n.onRight,A=n.onLeft,w=n.onUp,I=n.onDown,v=n.onChangeX,M=n.onChangeY,O=n.onChange,N=n.onToggleX,tt=n.onToggleY,L=n.onHover,D=n.onHoverEnd,H=n.onMove,X=n.ignoreCheck,q=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,lt=n.onEnable,J=n.onDisable,K=n.onClick,at=n.scrollSpeed,yt=n.capture,mt=n.allowClicks,Pt=n.lockAxis,bt=n.onLockAxis;this.target=o=xn(o)||cr,this.vars=n,d&&(d=Qe.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,at=at||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(Vs).lineHeight)||22);var Dt,Mt,F,Gt,vt,Lt,xt,V=this,Nt=0,T=0,S=n.passive||!h,B=Oi(o,on),rt=Oi(o,Ue),Z=B(),$=rt(),et=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ai[0]==="pointerdown",nt=Co(o),st=o.ownerDocument||lr,St=[0,0,0],Ot=[0,0,0],it=0,ee=function(){return it=Ao()},Ct=function(Et,Ut){return(V.event=Et)&&d&&~d.indexOf(Et.target)||Ut&&et&&Et.pointerType!=="touch"||X&&X(Et,Ut)},ot=function(){V._vx.reset(),V._vy.reset(),Mt.pause(),f&&f(V)},j=function(){var Et=V.deltaX=wp(St),Ut=V.deltaY=wp(Ot),ft=Math.abs(Et)>=i,kt=Math.abs(Ut)>=i;O&&(ft||kt)&&O(V,Et,Ut,St,Ot),ft&&(C&&V.deltaX>0&&C(V),A&&V.deltaX<0&&A(V),v&&v(V),N&&V.deltaX<0!=Nt<0&&N(V),Nt=V.deltaX,St[0]=St[1]=St[2]=0),kt&&(I&&V.deltaY>0&&I(V),w&&V.deltaY<0&&w(V),M&&M(V),tt&&V.deltaY<0!=T<0&&tt(V),T=V.deltaY,Ot[0]=Ot[1]=Ot[2]=0),(Gt||F)&&(H&&H(V),F&&(y(V),F=!1),Gt=!1),Lt&&!(Lt=!1)&&bt&&bt(V),vt&&(Q(V),vt=!1),Dt=0},ct=function(Et,Ut,ft){St[ft]+=Et,Ot[ft]+=Ut,V._vx.update(Et),V._vy.update(Ut),c?Dt||(Dt=requestAnimationFrame(j)):j()},Wt=function(Et,Ut){Pt&&!xt&&(V.axis=xt=Math.abs(Et)>Math.abs(Ut)?"x":"y",Lt=!0),xt!=="y"&&(St[2]+=Et,V._vx.update(Et,!0)),xt!=="x"&&(Ot[2]+=Ut,V._vy.update(Ut,!0)),c?Dt||(Dt=requestAnimationFrame(j)):j()},Zt=function(Et){if(!Ct(Et,1)){Et=wo(Et,h);var Ut=Et.clientX,ft=Et.clientY,kt=Ut-V.x,zt=ft-V.y,Xt=V.isDragging;V.x=Ut,V.y=ft,(Xt||Math.abs(V.startX-Ut)>=s||Math.abs(V.startY-ft)>=s)&&(y&&(F=!0),Xt||(V.isDragging=!0),Wt(kt,zt),Xt||m&&m(V))}},re=V.onPress=function(Rt){Ct(Rt,1)||Rt&&Rt.button||(V.axis=xt=null,Mt.pause(),V.isPressed=!0,Rt=wo(Rt),Nt=T=0,V.startX=V.x=Rt.clientX,V.startY=V.y=Rt.clientY,V._vx.reset(),V._vy.reset(),_n(q?o:st,ai[1],Zt,S,!0),V.deltaX=V.deltaY=0,x&&x(V))},gt=V.onRelease=function(Rt){if(!Ct(Rt,1)){gn(q?o:st,ai[1],Zt,!0);var Et=!isNaN(V.y-V.startY),Ut=V.isDragging,ft=Ut&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),kt=wo(Rt);!ft&&Et&&(V._vx.reset(),V._vy.reset(),h&&mt&&Qe.delayedCall(.08,function(){if(Ao()-it>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(st.createEvent){var zt=st.createEvent("MouseEvents");zt.initMouseEvent("click",!0,!0,Fn,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(zt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&Ut&&!q&&Mt.restart(!0),p&&Ut&&p(V),b&&b(V,ft)}},ht=function(Et){return Et.touches&&Et.touches.length>1&&(V.isGesturing=!0)&&Y(Et,V.isDragging)},P=function(){return(V.isGesturing=!1)||R(V)},ut=function(Et){if(!Ct(Et)){var Ut=B(),ft=rt();ct((Ut-Z)*at,(ft-$)*at,1),Z=Ut,$=ft,f&&Mt.restart(!0)}},dt=function(Et){if(!Ct(Et)){Et=wo(Et,h),Q&&(vt=!0);var Ut=(Et.deltaMode===1?l:Et.deltaMode===2?Fn.innerHeight:1)*_;ct(Et.deltaX*Ut,Et.deltaY*Ut,0),f&&!q&&Mt.restart(!0)}},Bt=function(Et){if(!Ct(Et)){var Ut=Et.clientX,ft=Et.clientY,kt=Ut-V.x,zt=ft-V.y;V.x=Ut,V.y=ft,Gt=!0,f&&Mt.restart(!0),(kt||zt)&&Wt(kt,zt)}},Ft=function(Et){V.event=Et,L(V)},ne=function(Et){V.event=Et,D(V)},le=function(Et){return Ct(Et)||wo(Et,h)&&K(V)};Mt=V._dc=Qe.delayedCall(u||.25,ot).pause(),V.deltaX=V.deltaY=0,V._vx=al(0,50,!0),V._vy=al(0,50,!0),V.scrollX=B,V.scrollY=rt,V.isDragging=V.isGesturing=V.isPressed=!1,Cp(this),V.enable=function(Rt){return V.isEnabled||(_n(nt?st:o,"scroll",Kh),a.indexOf("scroll")>=0&&_n(nt?st:o,"scroll",ut,S,yt),a.indexOf("wheel")>=0&&_n(o,"wheel",dt,S,yt),(a.indexOf("touch")>=0&&Tp||a.indexOf("pointer")>=0)&&(_n(o,ai[0],re,S,yt),_n(st,ai[2],gt),_n(st,ai[3],gt),mt&&_n(o,"click",ee,!0,!0),K&&_n(o,"click",le),Y&&_n(st,"gesturestart",ht),R&&_n(st,"gestureend",P),L&&_n(o,Wr+"enter",Ft),D&&_n(o,Wr+"leave",ne),H&&_n(o,Wr+"move",Bt)),V.isEnabled=!0,Rt&&Rt.type&&re(Rt),lt&&lt(V)),V},V.disable=function(){V.isEnabled&&(ks.filter(function(Rt){return Rt!==V&&Co(Rt.target)}).length||gn(nt?st:o,"scroll",Kh),V.isPressed&&(V._vx.reset(),V._vy.reset(),gn(q?o:st,ai[1],Zt,!0)),gn(nt?st:o,"scroll",ut,yt),gn(o,"wheel",dt,yt),gn(o,ai[0],re,yt),gn(st,ai[2],gt),gn(st,ai[3],gt),gn(o,"click",ee,!0),gn(o,"click",le),gn(st,"gesturestart",ht),gn(st,"gestureend",P),gn(o,Wr+"enter",Ft),gn(o,Wr+"leave",ne),gn(o,Wr+"move",Bt),V.isEnabled=V.isPressed=V.isDragging=!1,J&&J(V))},V.kill=V.revert=function(){V.disable();var Rt=ks.indexOf(V);Rt>=0&&ks.splice(Rt,1),Ni===V&&(Ni=0)},ks.push(V),q&&Co(o)&&(Ni=V),V.enable(g)},sS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Le.version="3.12.5";Le.create=function(r){return new Le(r)};Le.register=Ip;Le.getAll=function(){return ks.slice()};Le.getById=function(r){return ks.filter(function(t){return t.vars.id===r})[0]};Rp()&&Qe.registerPlugin(Le);var wt,Ws,oe,Ae,ci,ye,$p,bl,Vo,No,Po,ll,an,Al,su,yn,Dp,Up,Xs,Kp,Qh,Qp,vn,ou,jp,tm,hr,au,fu,Ys,du,El,lu,jh,cl=1,ln=Date.now,tu=ln(),$n=0,Lo=0,Np=function(t,e,n){var i=zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Op=function(t,e){return e&&(!zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},lS=function r(){return Lo&&requestAnimationFrame(r)},Fp=function(){return Al=1},Bp=function(){return Al=0},xi=function(t){return t},Io=function(t){return Math.round(t*1e5)/1e5||0},em=function(){return typeof window<"u"},nm=function(){return wt||em()&&(wt=window.gsap)&&wt.registerPlugin&&wt},$r=function(t){return!!~$p.indexOf(t)},im=function(t){return(t==="Height"?du:oe["inner"+t])||ci["client"+t]||ye["client"+t]},rm=function(t){return Fi(t,"getBoundingClientRect")||($r(t)?function(){return Sl.width=oe.innerWidth,Sl.height=du,Sl}:function(){return Bi(t)})},cS=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Fi(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?im(s):t["client"+s])||0}},hS=function(t,e){return!e||~li.indexOf(t)?rm(t):function(){return Sl}},vi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Fi(t,n))?a()-rm(t)()[s]:$r(t)?(ci[n]||ye[n])-im(i):t[n]-t["offset"+i])},hl=function(t,e){for(var n=0;n<Xs.length;n+=3)(!e||~e.indexOf(Xs[n+1]))&&t(Xs[n],Xs[n+1],Xs[n+2])},zn=function(t){return typeof t=="string"},Sn=function(t){return typeof t=="function"},Do=function(t){return typeof t=="number"},Xr=function(t){return typeof t=="object"},Ro=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},eu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Hs=Math.abs,sm="left",om="top",pu="right",mu="bottom",qr="width",Zr="height",Oo="Right",Fo="Left",Bo="Top",zo="Bottom",Ne="padding",Zn="margin",Zs="Width",gu="Height",Ve="px",Jn=function(t){return oe.getComputedStyle(t)},uS=function(t){var e=Jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Bi=function(t,e){var n=e&&Jn(t)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},wl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},am=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},fS=function(t){return function(e){return wt.utils.snap(am(t),e)}},_u=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},dS=function(t){return function(e,n){return _u(am(t))(e,n.direction)}},ul=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ye=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Xe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},kp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dl={toggleActions:"play",anticipatePin:0},Tl={top:0,left:0,center:.5,bottom:1,right:1},xl=function(t,e){if(zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Tl?Tl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},pl=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,_=Ae.createElement("div"),g=$r(n)||Fi(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?ye:n,y=t.indexOf("start")!==-1,x=y?c:h,b="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(b+=(i===Ue?pu:mu)+":"+(a+parseFloat(u))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=b,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],vl(_,0,i,y),_},vl=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Zs]=1,s["border"+o+Zs]=0,s[n.p]=e+"px",wt.set(t,s)},te=[],cu={},Ho,Vp=function(){return ln()-$n>34&&(Ho||(Ho=requestAnimationFrame(zi)))},Gs=function(){(!vn||!vn.isPressed||vn.startX>ye.clientWidth)&&(jt.cache++,vn?Ho||(Ho=requestAnimationFrame(zi)):zi(),$n||Qr("scrollStart"),$n=ln())},nu=function(){tm=oe.innerWidth,jp=oe.innerHeight},Uo=function(){jt.cache++,!an&&!Qp&&!Ae.fullscreenElement&&!Ae.webkitFullscreenElement&&(!ou||tm!==oe.innerWidth||Math.abs(oe.innerHeight-jp)>oe.innerHeight*.25)&&bl.restart(!0)},Kr={},pS=[],lm=function r(){return Xe($t,"scrollEnd",r)||Yr(!0)},Qr=function(t){return Kr[t]&&Kr[t].map(function(e){return e()})||pS},Bn=[],cm=function(t){for(var e=0;e<Bn.length;e+=5)(!t||Bn[e+4]&&Bn[e+4].query===t)&&(Bn[e].style.cssText=Bn[e+1],Bn[e].getBBox&&Bn[e].setAttribute("transform",Bn[e+2]||""),Bn[e+3].uncache=1)},xu=function(t,e){var n;for(yn=0;yn<te.length;yn++)n=te[yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));El=!0,e&&cm(e),e||Qr("revert")},hm=function(t,e){jt.cache++,(e||!Mn)&&jt.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),zn(t)&&(oe.history.scrollRestoration=fu=t)},Mn,Jr=0,Hp,mS=function(){if(Hp!==Jr){var t=Hp=Jr;requestAnimationFrame(function(){return t===Jr&&Yr(!0)})}},um=function(){ye.appendChild(Ys),du=!vn&&Ys.offsetHeight||oe.innerHeight,ye.removeChild(Ys)},Gp=function(t){return Vo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Yr=function(t,e){if($n&&!t&&!El){Ye($t,"scrollEnd",lm);return}um(),Mn=$t.isRefreshing=!0,jt.forEach(function(i){return Sn(i)&&++i.cacheID&&(i.rec=i())});var n=Qr("refreshInit");Kp&&$t.sort(),e||xu(),jt.forEach(function(i){Sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),El=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),lu=1,Gp(!0),te.forEach(function(i){var s=vi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Gp(!1),lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),jt.forEach(function(i){Sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),hm(fu,1),bl.pause(),Jr++,Mn=2,zi(2),te.forEach(function(i){return Sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=$t.isRefreshing=!1,Qr("refresh")},hu=0,yl=1,ko,zi=function(t){if(t===2||!Mn&&!El){$t.isUpdating=!0,ko&&ko.update(0);var e=te.length,n=ln(),i=n-tu>=50,s=e&&te[0].scroll();if(yl=hu>s?-1:1,Mn||(hu=s),i&&($n&&!Al&&n-$n>200&&($n=0,Qr("scrollEnd")),Po=tu,tu=n),yl<0){for(yn=e;yn-- >0;)te[yn]&&te[yn].update(0,i);yl=1}else for(yn=0;yn<e;yn++)te[yn]&&te[yn].update(0,i);$t.isUpdating=!1}Ho=0},uu=[sm,om,mu,pu,Zn+zo,Zn+Oo,Zn+Bo,Zn+Fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ml=uu.concat([qr,Zr,"boxSizing","max"+Zs,"max"+gu,"position",Zn,Ne,Ne+Bo,Ne+Oo,Ne+zo,Ne+Fo]),gS=function(t,e,n){qs(n);var i=t._gsap;if(i.spacerIsNative)qs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},iu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=uu.length,a=e.style,o=t.style,l;s--;)l=uu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[mu]=o[pu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[qr]=wl(t,on)+Ve,a[Zr]=wl(t,Ue)+Ve,a[Ne]=o[Zn]=o[om]=o[sm]="0",qs(i),o[qr]=o["max"+Zs]=n[qr],o[Zr]=o["max"+gu]=n[Zr],o[Ne]=n[Ne],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},_S=/([A-Z])/g,qs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(_S,"-$1").toLowerCase())}},ml=function(t){for(var e=Ml.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ml[s],n[Ml[s]]);return i.t=t,i},xS=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Sl={left:0,top:0},Wp=function(t,e,n,i,s,a,o,l,c,h,f,u,d,_){Sn(t)&&(t=t(l)),zn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?xl("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Do(t))d&&(t=wt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),o&&vl(o,n,i,!0);else{Sn(e)&&(e=e(l));var x=(t||"0").split(" "),b,C,A,w;y=xn(e,l)||ye,b=Bi(y)||{},(!b||!b.left&&!b.top)&&Jn(y).display==="none"&&(w=y.style.display,y.style.display="block",b=Bi(y),w?y.style.display=w:y.style.removeProperty("display")),C=xl(x[0],b[i.d]),A=xl(x[1]||"0",n),t=b[i.p]-c[i.p]-h+C+s-A,o&&vl(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var I=t+n,v=a._isStart;m="scroll"+i.d2,vl(a,I,i,v&&I>20||!v&&(f?Math.max(ye[m],ci[m]):a.parentNode[m])<=I+1),f&&(c=Bi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ve))}return d&&y&&(m=Bi(y),d.seek(u),p=Bi(y),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*u),d&&d.seek(g),d?t:Math.round(t)},vS=/(webkit|moz|length|cssText|inset)/i,Xp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===ye){t._stOrig=s.cssText,o=Jn(t);for(a in o)!+a&&!vS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},fm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},gl=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},Yp=function(t,e){var n=Oi(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,f){var u=a.tween,d=l.onComplete,_={};c=c||n();var g=fm(n,c,function(){u.kill(),a.tween=0});return f=h&&f||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){jt.cache++,a.tween&&zi()},l.onComplete=function(){a.tween=0,d&&d.call(u)},u=a.tween=wt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ye(t,"wheel",n.wheelHandler),$t.isTouch&&Ye(t,"touchmove",n.wheelHandler),s},$t=(function(){function r(e,n){Ws||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Lo){this.update=this.refresh=this.kill=xi;return}n=zp(zn(n)||Do(n)||n.nodeType?{trigger:n}:n,dl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,x=s.once,b=s.snap,C=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,v=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?on:Ue,O=!f&&f!==0,N=xn(n.scroller||oe),tt=wt.core.getCache(N),L=$r(N),D=("pinType"in n?n.pinType:Fi(N,"pinType")||L&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=O&&n.toggleActions.split(" "),q="markers"in n?n.markers:dl.markers,Y=L?0:parseFloat(Jn(N)["border"+M.p2+Zs])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},lt=cS(N,L,M),J=hS(N,L),K=0,at=0,yt=0,mt=Oi(N,M),Pt,bt,Dt,Mt,F,Gt,vt,Lt,xt,V,Nt,T,S,B,rt,Z,$,et,nt,st,St,Ot,it,ee,Ct,ot,j,ct,Wt,Zt,re,gt,ht,P,ut,dt,Bt,Ft,ne;if(R._startClamp=R._endClamp=!1,R._dir=M,m*=45,R.scroller=N,R.scroll=w?w.time.bind(w):mt,Mt=mt(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Kp=1,n.refreshPriority===-9999&&(ko=R)),tt.tweenScroll=tt.tweenScroll||{top:Yp(N,Ue),left:Yp(N,on)},R.tweenTo=Pt=tt.tweenScroll[M.p],R.scrubDuration=function(ft){ht=Do(ft)&&ft,ht?gt?gt.duration(ft):gt=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return p&&p(R)}}):(gt&&gt.progress(1).kill(),gt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Zt=0,l||(l=i.vars.id)),b&&((!Xr(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in ye.style&&wt.set(L?[ye,ci]:N,{scrollBehavior:"auto"}),jt.forEach(function(ft){return Sn(ft)&&ft.target===(L?Ae.scrollingElement||ci:N)&&(ft.smooth=!1)}),Dt=Sn(b.snapTo)?b.snapTo:b.snapTo==="labels"?fS(i):b.snapTo==="labelsDirectional"?dS(i):b.directional!==!1?function(ft,kt){return _u(b.snapTo)(ft,ln()-at<500?0:kt.direction)}:wt.utils.snap(b.snapTo),P=b.duration||{min:.1,max:2},P=Xr(P)?No(P.min,P.max):No(P,P),ut=wt.delayedCall(b.delay||ht/2||.1,function(){var ft=mt(),kt=ln()-at<500,zt=Pt.tween;if((kt||Math.abs(R.getVelocity())<10)&&!zt&&!Al&&K!==ft){var Xt=(ft-Gt)/B,Ee=i&&!O?i.totalProgress():Xt,Kt=kt?0:(Ee-re)/(ln()-Po)*1e3||0,me=wt.utils.clamp(-Xt,1-Xt,Hs(Kt/2)*Kt/.185),Oe=Xt+(b.inertia===!1?0:me),xe,ge,ce=b,Ln=ce.onStart,E=ce.onInterrupt,U=ce.onComplete;if(xe=Dt(Oe,R),Do(xe)||(xe=Oe),ge=Math.round(Gt+xe*B),ft<=vt&&ft>=Gt&&ge!==ft){if(zt&&!zt._initted&&zt.data<=Hs(ge-ft))return;b.inertia===!1&&(me=xe-Xt),Pt(ge,{duration:P(Hs(Math.max(Hs(Oe-Ee),Hs(xe-Ee))*.185/Kt/.05||0)),ease:b.ease||"power3",data:Hs(ge-ft),onInterrupt:function(){return ut.restart(!0)&&E&&E(R)},onComplete:function(){R.update(),K=mt(),i&&(gt?gt.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),Zt=re=i&&!O?i.totalProgress():R.progress,y&&y(R),U&&U(R)}},ft,me*B,ge-ft-me*B),Ln&&Ln(R,Pt.tween)}}else R.isActive&&K!==ft&&ut.restart(!0)}).pause()),l&&(cu[l]=R),u=R.trigger=xn(u||d!==!0&&d),ne=u&&u._gsap&&u._gsap.stRevert,ne&&(ne=ne(R)),d=d===!0?u:xn(d),zn(o)&&(o={targets:u,className:o}),d&&(_===!1||_===Zn||(_=!_&&d.parentNode&&d.parentNode.style&&Jn(d.parentNode).display==="flex"?!1:Ne),R.pin=d,bt=wt.core.getCache(d),bt.spacer?rt=bt.pinState:(A&&(A=xn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),bt.spacerIsNative=!!A,A&&(bt.spacerState=ml(A))),bt.spacer=et=A||Ae.createElement("div"),et.classList.add("pin-spacer"),l&&et.classList.add("pin-spacer-"+l),bt.pinState=rt=ml(d)),n.force3D!==!1&&wt.set(d,{force3D:!0}),R.spacer=et=bt.spacer,Wt=Jn(d),ee=Wt[_+M.os2],st=wt.getProperty(d),St=wt.quickSetter(d,M.a,Ve),iu(d,et,Wt),$=ml(d)),q){T=Xr(q)?zp(q,kp):kp,V=pl("scroller-start",l,N,M,T,0),Nt=pl("scroller-end",l,N,M,T,0,V),nt=V["offset"+M.op.d2];var le=xn(Fi(N,"content")||N);Lt=this.markerStart=pl("start",l,le,M,T,nt,0,w),xt=this.markerEnd=pl("end",l,le,M,T,nt,0,w),w&&(Ft=wt.quickSetter([Lt,xt],M.a,Ve)),!D&&!(li.length&&Fi(N,"fixedMarkers")===!0)&&(uS(L?ye:N),wt.set([V,Nt],{force3D:!0}),ot=wt.quickSetter(V,M.a,Ve),ct=wt.quickSetter(Nt,M.a,Ve))}if(w){var Rt=w.vars.onUpdate,Et=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),Rt&&Rt.apply(w,Et||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(ft,kt){if(!kt)return R.kill(!0);var zt=ft!==!1||!R.enabled,Xt=an;zt!==R.isReverted&&(zt&&(dt=Math.max(mt(),R.scroll.rec||0),yt=R.progress,Bt=i&&i.progress()),Lt&&[Lt,xt,V,Nt].forEach(function(Ee){return Ee.style.display=zt?"none":"block"}),zt&&(an=R,R.update(zt)),d&&(!C||!R.isActive)&&(zt?gS(d,et,rt):iu(d,et,Jn(d),Ct)),zt||R.update(zt),an=Xt,R.isReverted=zt)},R.refresh=function(ft,kt,zt,Xt){if(!((an||!R.enabled)&&!kt)){if(d&&ft&&$n){Ye(r,"scrollEnd",lm);return}!Mn&&Q&&Q(R),an=R,Pt.tween&&!zt&&(Pt.tween.kill(),Pt.tween=0),gt&&gt.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ee=lt(),Kt=J(),me=w?w.duration():vi(N,M),Oe=B<=.01,xe=0,ge=Xt||0,ce=Xr(zt)?zt.end:n.end,Ln=n.endTrigger||u,E=Xr(zt)?zt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),U=R.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,R),W=u&&Math.max(0,te.indexOf(R))||0,G=W,z,pt,Tt,Vt,At,It,Ht,Yt,Me,Fe,he,hn,ue;for(q&&Xr(zt)&&(hn=wt.getProperty(V,M.p),ue=wt.getProperty(Nt,M.p));G--;)It=te[G],It.end||It.refresh(0,1)||(an=R),Ht=It.pin,Ht&&(Ht===u||Ht===d||Ht===U)&&!It.isReverted&&(Fe||(Fe=[]),Fe.unshift(It),It.revert(!0,!0)),It!==te[G]&&(W--,G--);for(Sn(E)&&(E=E(R)),E=Np(E,"start",R),Gt=Wp(E,u,Ee,M,mt(),Lt,V,R,Kt,Y,D,me,w,R._startClamp&&"_startClamp")||(d?-.001:0),Sn(ce)&&(ce=ce(R)),zn(ce)&&!ce.indexOf("+=")&&(~ce.indexOf(" ")?ce=(zn(E)?E.split(" ")[0]:"")+ce:(xe=xl(ce.substr(2),Ee),ce=zn(E)?E:(w?wt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Gt):Gt)+xe,Ln=u)),ce=Np(ce,"end",R),vt=Math.max(Gt,Wp(ce||(Ln?"100% 0":me),Ln,Ee,M,mt()+xe,xt,Nt,R,Kt,Y,D,me,w,R._endClamp&&"_endClamp"))||-.001,xe=0,G=W;G--;)It=te[G],Ht=It.pin,Ht&&It.start-It._pinPush<=Gt&&!w&&It.end>0&&(z=It.end-(R._startClamp?Math.max(0,It.start):It.start),(Ht===u&&It.start-It._pinPush<Gt||Ht===U)&&isNaN(E)&&(xe+=z*(1-It.progress)),Ht===d&&(ge+=z));if(Gt+=xe,vt+=xe,R._startClamp&&(R._startClamp+=xe),R._endClamp&&!Mn&&(R._endClamp=vt||-.001,vt=Math.min(vt,vi(N,M))),B=vt-Gt||(Gt-=.01)&&.001,Oe&&(yt=wt.utils.clamp(0,1,wt.utils.normalize(Gt,vt,dt))),R._pinPush=ge,Lt&&xe&&(z={},z[M.a]="+="+xe,U&&(z[M.p]="-="+mt()),wt.set([Lt,xt],z)),d&&!(lu&&R.end>=vi(N,M)))z=Jn(d),Vt=M===Ue,Tt=mt(),Ot=parseFloat(st(M.a))+ge,!me&&vt>1&&(he=(L?Ae.scrollingElement||ci:N).style,he={style:he,value:he["overflow"+M.a.toUpperCase()]},L&&Jn(ye)["overflow"+M.a.toUpperCase()]!=="scroll"&&(he.style["overflow"+M.a.toUpperCase()]="scroll")),iu(d,et,z),$=ml(d),pt=Bi(d,!0),Yt=D&&Oi(N,Vt?on:Ue)(),_?(Ct=[_+M.os2,B+ge+Ve],Ct.t=et,G=_===Ne?wl(d,M)+B+ge:0,G&&(Ct.push(M.d,G+Ve),et.style.flexBasis!=="auto"&&(et.style.flexBasis=G+Ve)),qs(Ct),U&&te.forEach(function(qt){qt.pin===U&&qt.vars.pinSpacing!==!1&&(qt._subPinOffset=!0)}),D&&mt(dt)):(G=wl(d,M),G&&et.style.flexBasis!=="auto"&&(et.style.flexBasis=G+Ve)),D&&(At={top:pt.top+(Vt?Tt-Gt:Yt)+Ve,left:pt.left+(Vt?Yt:Tt-Gt)+Ve,boxSizing:"border-box",position:"fixed"},At[qr]=At["max"+Zs]=Math.ceil(pt.width)+Ve,At[Zr]=At["max"+gu]=Math.ceil(pt.height)+Ve,At[Zn]=At[Zn+Bo]=At[Zn+Oo]=At[Zn+zo]=At[Zn+Fo]="0",At[Ne]=z[Ne],At[Ne+Bo]=z[Ne+Bo],At[Ne+Oo]=z[Ne+Oo],At[Ne+zo]=z[Ne+zo],At[Ne+Fo]=z[Ne+Fo],Z=xS(rt,At,C),Mn&&mt(0)),i?(Me=i._initted,Qh(1),i.render(i.duration(),!0,!0),it=st(M.a)-Ot+B+ge,j=Math.abs(B-it)>1,D&&j&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qh(0)):it=B,he&&(he.value?he.style["overflow"+M.a.toUpperCase()]=he.value:he.style.removeProperty("overflow-"+M.a));else if(u&&mt()&&!w)for(pt=u.parentNode;pt&&pt!==ye;)pt._pinOffset&&(Gt-=pt._pinOffset,vt-=pt._pinOffset),pt=pt.parentNode;Fe&&Fe.forEach(function(qt){return qt.revert(!1,!0)}),R.start=Gt,R.end=vt,Mt=F=Mn?dt:mt(),!w&&!Mn&&(Mt<dt&&mt(dt),R.scroll.rec=0),R.revert(!1,!0),at=ln(),ut&&(K=-1,ut.restart(!0)),an=0,i&&O&&(i._initted||Bt)&&i.progress()!==Bt&&i.progress(Bt||0,!0).render(i.time(),!0,!0),(Oe||yt!==R.progress||w||g)&&(i&&!O&&i.totalProgress(w&&Gt<-.001&&!yt?wt.utils.normalize(Gt,vt,0):yt,!0),R.progress=Oe||(Mt-Gt)/B===yt?0:yt),d&&_&&(et._pinOffset=Math.round(R.progress*it)),gt&&gt.invalidate(),isNaN(hn)||(hn-=wt.getProperty(V,M.p),ue-=wt.getProperty(Nt,M.p),gl(V,M,hn),gl(Lt,M,hn-(Xt||0)),gl(Nt,M,ue),gl(xt,M,ue-(Xt||0))),Oe&&!Mn&&R.update(),h&&!Mn&&!S&&(S=!0,h(R),S=!1)}},R.getVelocity=function(){return(mt()-F)/(ln()-Po)*1e3||0},R.endAnimation=function(){Ro(R.callbackAnimation),i&&(gt?gt.progress(1):i.paused()?O||Ro(i,R.direction<0,1):Ro(i,i.reversed()))},R.labelToScroll=function(ft){return i&&i.labels&&(Gt||R.refresh()||Gt)+i.labels[ft]/i.duration()*B||0},R.getTrailing=function(ft){var kt=te.indexOf(R),zt=R.direction>0?te.slice(0,kt).reverse():te.slice(kt+1);return(zn(ft)?zt.filter(function(Xt){return Xt.vars.preventOverlaps===ft}):zt).filter(function(Xt){return R.direction>0?Xt.end<=Gt:Xt.start>=vt})},R.update=function(ft,kt,zt){if(!(w&&!zt&&!ft)){var Xt=Mn===!0?dt:R.scroll(),Ee=ft?0:(Xt-Gt)/B,Kt=Ee<0?0:Ee>1?1:Ee||0,me=R.progress,Oe,xe,ge,ce,Ln,E,U,W;if(kt&&(F=Mt,Mt=w?mt():Xt,b&&(re=Zt,Zt=i&&!O?i.totalProgress():Kt)),m&&d&&!an&&!cl&&$n&&(!Kt&&Gt<Xt+(Xt-F)/(ln()-Po)*m?Kt=1e-4:Kt===1&&vt>Xt+(Xt-F)/(ln()-Po)*m&&(Kt=.9999)),Kt!==me&&R.enabled){if(Oe=R.isActive=!!Kt&&Kt<1,xe=!!me&&me<1,E=Oe!==xe,Ln=E||!!Kt!=!!me,R.direction=Kt>me?1:-1,R.progress=Kt,Ln&&!an&&(ge=Kt&&!me?0:Kt===1?1:me===1?2:3,O&&(ce=!E&&X[ge+1]!=="none"&&X[ge+1]||X[ge],W=i&&(ce==="complete"||ce==="reset"||ce in i))),v&&(E||W)&&(W||f||!i)&&(Sn(v)?v(R):R.getTrailing(v).forEach(function(Tt){return Tt.endAnimation()})),O||(gt&&!an&&!cl?(gt._dp._time-gt._start!==gt._time&&gt.render(gt._dp._time-gt._start),gt.resetTo?gt.resetTo("totalProgress",Kt,i._tTime/i._tDur):(gt.vars.totalProgress=Kt,gt.invalidate().restart())):i&&i.totalProgress(Kt,!!(an&&(at||ft)))),d){if(ft&&_&&(et.style[_+M.os2]=ee),!D)St(Io(Ot+it*Kt));else if(Ln){if(U=!ft&&Kt>me&&vt+1>Xt&&Xt+1>=vi(N,M),C)if(!ft&&(Oe||U)){var G=Bi(d,!0),z=Xt-Gt;Xp(d,ye,G.top+(M===Ue?z:0)+Ve,G.left+(M===Ue?0:z)+Ve)}else Xp(d,et);qs(Oe||U?Z:$),j&&Kt<1&&Oe||St(Ot+(Kt===1&&!U?it:0))}}b&&!Pt.tween&&!an&&!cl&&ut.restart(!0),o&&(E||x&&Kt&&(Kt<1||!jh))&&Vo(o.targets).forEach(function(Tt){return Tt.classList[Oe||x?"add":"remove"](o.className)}),a&&!O&&!ft&&a(R),Ln&&!an?(O&&(W&&(ce==="complete"?i.pause().totalProgress(1):ce==="reset"?i.restart(!0).pause():ce==="restart"?i.restart(!0):i[ce]()),a&&a(R)),(E||!jh)&&(c&&E&&eu(R,c),H[ge]&&eu(R,H[ge]),x&&(Kt===1?R.kill(!1,1):H[ge]=0),E||(ge=Kt===1?1:3,H[ge]&&eu(R,H[ge]))),I&&!Oe&&Math.abs(R.getVelocity())>(Do(I)?I:2500)&&(Ro(R.callbackAnimation),gt?gt.progress(1):Ro(i,ce==="reverse"?1:!Kt,1))):O&&a&&!an&&a(R)}if(ct){var pt=w?Xt/w.duration()*(w._caScrollDist||0):Xt;ot(pt+(V._isFlipped?1:0)),ct(pt)}Ft&&Ft(-Xt/w.duration()*(w._caScrollDist||0))}},R.enable=function(ft,kt){R.enabled||(R.enabled=!0,Ye(N,"resize",Uo),L||Ye(N,"scroll",Gs),Q&&Ye(r,"refreshInit",Q),ft!==!1&&(R.progress=yt=0,Mt=F=K=mt()),kt!==!1&&R.refresh())},R.getTween=function(ft){return ft&&Pt?Pt.tween:gt},R.setPositions=function(ft,kt,zt,Xt){if(w){var Ee=w.scrollTrigger,Kt=w.duration(),me=Ee.end-Ee.start;ft=Ee.start+me*ft/Kt,kt=Ee.start+me*kt/Kt}R.refresh(!1,!1,{start:Op(ft,zt&&!!R._startClamp),end:Op(kt,zt&&!!R._endClamp)},Xt),R.update()},R.adjustPinSpacing=function(ft){if(Ct&&ft){var kt=Ct.indexOf(M.d)+1;Ct[kt]=parseFloat(Ct[kt])+ft+Ve,Ct[1]=parseFloat(Ct[1])+ft+Ve,qs(Ct)}},R.disable=function(ft,kt){if(R.enabled&&(ft!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,kt||gt&&gt.pause(),dt=0,bt&&(bt.uncache=1),Q&&Xe(r,"refreshInit",Q),ut&&(ut.pause(),Pt.tween&&Pt.tween.kill()&&(Pt.tween=0)),!L)){for(var zt=te.length;zt--;)if(te[zt].scroller===N&&te[zt]!==R)return;Xe(N,"resize",Uo),L||Xe(N,"scroll",Gs)}},R.kill=function(ft,kt){R.disable(ft,kt),gt&&!kt&&gt.kill(),l&&delete cu[l];var zt=te.indexOf(R);zt>=0&&te.splice(zt,1),zt===yn&&yl>0&&yn--,zt=0,te.forEach(function(Xt){return Xt.scroller===R.scroller&&(zt=1)}),zt||Mn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ft&&i.revert({kill:!1}),kt||i.kill()),Lt&&[Lt,xt,V,Nt].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),ko===R&&(ko=0),d&&(bt&&(bt.uncache=1),zt=0,te.forEach(function(Xt){return Xt.pin===d&&zt++}),zt||(bt.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),ne&&ne(R),i&&i.add&&!B){var Ut=R.update;R.update=function(){R.update=Ut,Gt||vt||R.refresh()},wt.delayedCall(.01,R.update),B=.01,Gt=vt=0}else R.refresh();d&&mS()},r.register=function(n){return Ws||(wt=n||nm(),em()&&window.document&&r.enable(),Ws=Lo),Ws},r.defaults=function(n){if(n)for(var i in n)dl[i]=n[i];return dl},r.disable=function(n,i){Lo=0,te.forEach(function(a){return a[i?"kill":"disable"](n)}),Xe(oe,"wheel",Gs),Xe(Ae,"scroll",Gs),clearInterval(ll),Xe(Ae,"touchcancel",xi),Xe(ye,"touchstart",xi),ul(Xe,Ae,"pointerdown,touchstart,mousedown",Fp),ul(Xe,Ae,"pointerup,touchend,mouseup",Bp),bl.kill(),hl(Xe);for(var s=0;s<jt.length;s+=3)fl(Xe,jt[s],jt[s+1]),fl(Xe,jt[s],jt[s+2])},r.enable=function(){if(oe=window,Ae=document,ci=Ae.documentElement,ye=Ae.body,wt&&(Vo=wt.utils.toArray,No=wt.utils.clamp,au=wt.core.context||xi,Qh=wt.core.suppressOverwrites||xi,fu=oe.history.scrollRestoration||"auto",hu=oe.pageYOffset,wt.core.globals("ScrollTrigger",r),ye)){Lo=1,Ys=document.createElement("div"),Ys.style.height="100vh",Ys.style.position="absolute",um(),lS(),Le.register(wt),r.isTouch=Le.isTouch,hr=Le.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ou=Le.isTouch===1,Ye(oe,"wheel",Gs),$p=[oe,Ae,ci,ye],wt.matchMedia?(r.matchMedia=function(l){var c=wt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},wt.addEventListener("matchMediaInit",function(){return xu()}),wt.addEventListener("matchMediaRevert",function(){return cm()}),wt.addEventListener("matchMedia",function(){Yr(0,1),Qr("matchMedia")}),wt.matchMedia("(orientation: portrait)",function(){return nu(),nu})):console.warn("Requires GSAP 3.11.0 or later"),nu(),Ye(Ae,"scroll",Gs);var n=ye.style,i=n.borderTopStyle,s=wt.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Bi(ye),Ue.m=Math.round(a.top+Ue.sc())||0,on.m=Math.round(a.left+on.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ll=setInterval(Vp,250),wt.delayedCall(.5,function(){return cl=0}),Ye(Ae,"touchcancel",xi),Ye(ye,"touchstart",xi),ul(Ye,Ae,"pointerdown,touchstart,mousedown",Fp),ul(Ye,Ae,"pointerup,touchend,mouseup",Bp),su=wt.utils.checkPrefix("transform"),Ml.push(su),Ws=ln(),bl=wt.delayedCall(.2,Yr).pause(),Xs=[Ae,"visibilitychange",function(){var l=oe.innerWidth,c=oe.innerHeight;Ae.hidden?(Dp=l,Up=c):(Dp!==l||Up!==c)&&Uo()},Ae,"DOMContentLoaded",Yr,oe,"load",Yr,oe,"resize",Uo],hl(Ye),te.forEach(function(l){return l.enable(0,1)}),o=0;o<jt.length;o+=3)fl(Xe,jt[o],jt[o+1]),fl(Xe,jt[o],jt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(jh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ll)||(ll=i)&&setInterval(Vp,i),"ignoreMobileResize"in n&&(ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(hl(Xe)||hl(Ye,n.autoRefreshEvents||"none"),Qp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),a=jt.indexOf(s),o=$r(s);~a&&jt.splice(a,o?6:2),i&&(o?li.unshift(oe,i,ye,i,ci,i):li.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(zn(n)?xn(n):n).getBoundingClientRect(),o=a[s?qr:Zr]*i||0;return s?a.right-o>0&&a.left+o<oe.innerWidth:a.bottom-o>0&&a.top+o<oe.innerHeight},r.positionInViewport=function(n,i,s){zn(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[s?qr:Zr],l=i==null?o/2:i in Tl?Tl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/oe.innerWidth:(a.top+l)/oe.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r})();$t.version="3.12.5";$t.saveStyles=function(r){return r?Vo(r).forEach(function(t){if(t&&t.style){var e=Bn.indexOf(t);e>=0&&Bn.splice(e,5),Bn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),au())}}):Bn};$t.revert=function(r,t){return xu(!r,t)};$t.create=function(r,t){return new $t(r,t)};$t.refresh=function(r){return r?Uo():(Ws||$t.register())&&Yr(!0)};$t.update=function(r){return++jt.cache&&zi(r===!0?2:0)};$t.clearScrollMemory=hm;$t.maxScroll=function(r,t){return vi(r,t?on:Ue)};$t.getScrollFunc=function(r,t){return Oi(xn(r),t?on:Ue)};$t.getById=function(r){return cu[r]};$t.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$t.isScrolling=function(){return!!$n};$t.snapDirectional=_u;$t.addEventListener=function(r,t){var e=Kr[r]||(Kr[r]=[]);~e.indexOf(t)||e.push(t)};$t.removeEventListener=function(r,t){var e=Kr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$t.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var f=[],u=[],d=wt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),u.push(_),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Sn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Sn(s)&&(s=s(),Ye($t,"refresh",function(){return s=t.batchMax()})),Vo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push($t.create(c))}),e};var qp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ru=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Le.isTouch?" pinch-zoom":""):"none",t===ci&&r(ye,e)},_l={auto:1,scroll:1},yS=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||wt.core.getCache(s),o=ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ye&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_l[(l=Jn(s)).overflowY]||_l[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!$r(s)&&(_l[(l=Jn(s)).overflowY]||_l[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},dm=function(t,e,n,i){return Le.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&yS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ye(Ae,Le.eventTypes[0],Jp,!1,!0)},onDisable:function(){return Xe(Ae,Le.eventTypes[0],Jp,!0)}})},MS=/(input|label|select|textarea)/i,Zp,Jp=function(t){var e=MS.test(t.target.tagName);(e||Zp)&&(t._gsapAllow=!0,Zp=e)},SS=function(t){Xr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=xn(t.target)||ci,h=wt.core.globals().ScrollSmoother,f=h&&h.get(),u=hr&&(t.content&&xn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=Oi(c,Ue),_=Oi(c,on),g=1,m=(Le.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,p=0,y=Sn(i)?function(){return i(o)}:function(){return i||2.8},x,b,C=dm(c,t.type,!0,s),A=function(){return b=!1},w=xi,I=xi,v=function(){l=vi(c,Ue),I=No(hr?1:0,l),n&&(w=No(0,vi(c,on))),x=Jr},M=function(){u._gsap.y=Io(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(b){requestAnimationFrame(A);var q=Io(o.deltaY/2),Y=I(d.v-q);if(u&&Y!==d.v+d.offset){d.offset=Y-d.v;var R=Io((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",d.cacheID=jt.cache,zi()}return!0}d.offset&&M(),b=!0},N,tt,L,D,H=function(){v(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return u&&wt.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return hr&&X.type==="touchmove"&&O(X)||g>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){b=!1;var X=g;g=Io((oe.visualViewport&&oe.visualViewport.scale||1)/m),N.pause(),X!==g&&ru(c,g>1.01?!0:n?!1:"x"),tt=_(),L=d(),v(),x=Jr},t.onRelease=t.onGestureStart=function(X,q){if(d.offset&&M(),!q)D.restart(!0);else{jt.cache++;var Y=y(),R,Q;n&&(R=_(),Q=R+Y*.05*-X.velocityX/.227,Y*=qp(_,R,Q,vi(c,on)),N.vars.scrollX=w(Q)),R=d(),Q=R+Y*.05*-X.velocityY/.227,Y*=qp(d,R,Q,vi(c,Ue)),N.vars.scrollY=I(Q),N.invalidate().duration(Y).play(.01),(hr&&N.vars.scrollY>=l||R>=l-1)&&wt.to({},{onUpdate:H,duration:Y})}a&&a(X)},t.onWheel=function(){N._ts&&N.pause(),ln()-p>1e3&&(x=0,p=ln())},t.onChange=function(X,q,Y,R,Q){if(Jr!==x&&v(),q&&n&&_(w(R[2]===q?tt+(X.startX-X.x):_()+q-R[1])),Y){d.offset&&M();var lt=Q[2]===Y,J=lt?L+X.startY-X.y:d()+Y-Q[1],K=I(J);lt&&J!==K&&(L+=K-J),d(K)}(Y||q)&&zi()},t.onEnable=function(){ru(c,n?!1:"x"),$t.addEventListener("refresh",H),Ye(oe,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){ru(c,!0),Xe(oe,"resize",H),$t.removeEventListener("refresh",H),C.kill()},t.lockAxis=t.lockAxis!==!1,o=new Le(t),o.iOS=hr,hr&&!d()&&d(1),hr&&wt.ticker.add(xi),D=o._dc,N=wt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fm(d,d(),function(){return N.pause()})},onUpdate:zi,onComplete:D.vars.onComplete}),o};$t.sort=function(r){return te.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};$t.observe=function(r){return new Le(r)};$t.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var t=r instanceof Le?r:SS(r);return vn&&vn.target===t.target&&vn.kill(),$r(t.target)&&(vn=t),t};$t.core={_getVelocityProp:al,_inputObserver:dm,_scrollers:jt,_proxies:li,bridge:{ss:function(){$n||Qr("scrollStart"),$n=ln()},ref:function(){return an}}};nm()&&wt.registerPlugin($t);var bS="1.1.14";function mm(r,t,e){return Math.max(r,Math.min(t,e))}function ES(r,t,e){return(1-e)*r+e*t}function wS(r,t,e,n){return ES(r,t,1-Math.exp(-e*n))}function TS(r,t){return(r%t+t)%t}var AS=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=mm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=wS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function CS(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var RS=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=r,this.content=t,e&&(this.debouncedResize=CS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},gm=class{events={};emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?.push(t)||(this.events[r]=[t]),()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},pm=100/6,ur={passive:!1},PS=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new gm;on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}onTouchStart=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?pm:n===2?this.window.width:1,s=n===1?pm:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},_m=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new AS;emitter=new gm;dimensions;virtualScroll;constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=b=>Math.min(1,1.001-Math.pow(2,-10*b)),lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:y=!0,__experimental__naiveDimensions:x=!1}={}){window.lenisVersion=bS,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:y,__experimental__naiveDimensions:x},this.dimensions=new RS(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new PS(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}let o=t===0&&e===0,l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(u)>5;g&&(u=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(r){let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let u;if(typeof r=="string"?u=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(u=r),u){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let d=u.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=mm(0,r,this.limit),r===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(u,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?TS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Js=[{key:"sicherheit",fx:.2,color:11570519},{key:"ki",fx:.5,color:4172277},{key:"helpdesk",fx:.8,color:5746829}],LS=.56,hi=r=>document.querySelector(r),IS=(r,t,e)=>Math.min(e,Math.max(t,r)),Cl=(r,t,e)=>{let n=IS((e-r)/(t-r),0,1);return n*n*(3-2*n)},fr=(r,t,e)=>r+(t-r)*e,DS=matchMedia("(prefers-reduced-motion: reduce)").matches,xm=matchMedia("(pointer: coarse)").matches,vm=matchMedia("(max-width: 760px)").matches,cn={scene:hi("#hero"),sticky:hi(".scene__sticky"),mount:hi("#scene-canvas"),poster:hi("#scene-poster"),headline:hi("#scene-headline"),pillarsWrap:hi("#pillars"),pillars:Array.from(document.querySelectorAll(".pillar"))};function US(){let r=hi("#subpage"),t=hi("#subpage-scaler"),e=hi("#subpage-body"),n=hi("#subpage-back"),i=!1;function s(o,l){let c=document.getElementById("tpl-"+o);if(c){if(e.innerHTML="",e.appendChild(c.content.cloneNode(!0)),l){let h=l.getBoundingClientRect();t.style.transformOrigin=`${h.left+h.width/2}px ${h.top+h.height/2}px`}else t.style.transformOrigin="50% 50%";r.hidden=!1,t.scrollTop=0,requestAnimationFrame(()=>{requestAnimationFrame(()=>r.classList.add("is-open"))}),document.body.style.overflow="hidden",i=!0,n.focus(),e.querySelectorAll("[data-close]").forEach(h=>{h.addEventListener("click",()=>a())})}}function a(){if(!i)return;r.classList.remove("is-open"),document.body.style.overflow="",i=!1;let o=()=>{r.hidden=!0,t.removeEventListener("transitionend",o)};t.addEventListener("transitionend",o),setTimeout(()=>{i||(r.hidden=!0)},700)}return n.addEventListener("click",a),document.addEventListener("keydown",o=>{o.key==="Escape"&&i&&a()}),cn.pillars.forEach(o=>{o.addEventListener("click",()=>s(o.dataset.pillar,o))}),{openPage:s,closePage:a}}function ym(){cn.pillarsWrap.classList.add("is-active"),cn.pillarsWrap.setAttribute("aria-hidden","false"),cn.pillars.forEach((r,t)=>{r.style.left=Js[t].fx*100+"%",r.style.top="66%",r.style.opacity="1",r.style.pointerEvents="auto"})}function NS(){let r=hi(".topbar"),t=()=>r.classList.toggle("is-scrolled",window.scrollY>40);t(),window.addEventListener("scroll",t,{passive:!0})}function OS(){Jh.registerPlugin($t);let r=vm?44:72,t=Math.min(window.devicePixelRatio||1,vm?1.5:2),e=new lo({alpha:!0,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(t),e.setClearColor(0,0),cn.mount.appendChild(e.domElement);let n=new Na,i=new dn(50,1,1,5e3);i.position.z=900;let s=0,a=0,o=0,l=0;function c(){s=cn.sticky.clientWidth,a=cn.sticky.clientHeight,i.aspect=s/a,i.updateProjectionMatrix(),e.setSize(s,a,!1),l=2*Math.tan(i.fov*Math.PI/360)*i.position.z,o=l*i.aspect,f.uniforms.uScale.value=a*t*.5}let h=(Z,$,et=0)=>new k((Z-.5)*o,(.5-$)*l,et),f=new si({uniforms:{uScale:{value:400}},transparent:!0,depthWrite:!1,blending:wr,vertexShader:`
      attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
      varying float vAlpha; varying vec3 vColor; uniform float uScale;
      void main(){
        vAlpha = aAlpha; vColor = aColor;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (uScale / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vAlpha; varying vec3 vColor;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float a = pow(smoothstep(0.5, 0.0, d), 1.5);
        gl_FragColor = vec4(vColor, a * vAlpha);
      }`}),u=new ie(11570519),d=Js.map(Z=>new ie(Z.color)),_=[];for(let Z=0;Z<r;Z++){let $=Math.random(),et=Math.random(),nt=0,st=1/0;Js.forEach((St,Ot)=>{let it=Math.abs($-St.fx);it<st&&(st=it,nt=Ot)}),_.push({fx:$,fy:et,fz:Math.random(),hub:nt,phase:Math.random()*Math.PI*2,spd:.5+Math.random()*.8,home:new k,pos:new k,sig:Math.random()})}let g=new Float32Array(r*3),m=new Float32Array(r),p=new Float32Array(r),y=new Float32Array(r*3);_.forEach((Z,$)=>{let et=$%9===0?9:4+Math.random()*3;m[$]=et,p[$]=.9,y[$*3]=u.r,y[$*3+1]=u.g,y[$*3+2]=u.b});let x=new Je;x.setAttribute("position",new ae(g,3)),x.setAttribute("aSize",new ae(m,1)),x.setAttribute("aAlpha",new ae(p,1)),x.setAttribute("aColor",new ae(y,3));let b=new Rr(x,f);b.frustumCulled=!1,n.add(b);let C=[];for(let Z=0;Z<r;Z++){let $=[];for(let et=0;et<r;et++)if(et!==Z){let nt=_[Z],st=_[et];$.push({j:et,d:(nt.fx-st.fx)**2+(nt.fy-st.fy)**2})}$.sort((et,nt)=>et.d-nt.d);for(let et=0;et<3;et++){let nt=$[et].j;Z<nt?C.push([Z,nt]):C.some(st=>st[0]===nt&&st[1]===Z)||C.push([nt,Z])}}let A=new Float32Array(C.length*6),w=new Je;w.setAttribute("position",new ae(A,3));let I=new Cr({color:4172277,transparent:!0,opacity:.35,blending:wr,depthWrite:!1}),v=new As(w,I);v.frustumCulled=!1,n.add(v);let M=new Float32Array(r*6),O=new Float32Array(r*6);_.forEach((Z,$)=>{let et=d[Z.hub];for(let nt of[0,3])O[$*6+nt]=et.r,O[$*6+nt+1]=et.g,O[$*6+nt+2]=et.b});let N=new Je;N.setAttribute("position",new ae(M,3)),N.setAttribute("color",new ae(O,3));let tt=new Cr({vertexColors:!0,transparent:!0,opacity:0,blending:wr,depthWrite:!1}),L=new As(N,tt);L.frustumCulled=!1,n.add(L);let D=new Float32Array(r*3),H=new Float32Array(r),X=new Float32Array(r),q=new Float32Array(r*3);_.forEach((Z,$)=>{H[$]=5;let et=d[Z.hub];q[$*3]=et.r,q[$*3+1]=et.g,q[$*3+2]=et.b});let Y=new Je;Y.setAttribute("position",new ae(D,3)),Y.setAttribute("aSize",new ae(H,1)),Y.setAttribute("aAlpha",new ae(X,1)),Y.setAttribute("aColor",new ae(q,3));let R=new Rr(Y,f);R.frustumCulled=!1,n.add(R);let Q=Js.map(Z=>{let $=new Je;$.setAttribute("position",new ae(new Float32Array(3),3)),$.setAttribute("aSize",new ae(new Float32Array([26]),1)),$.setAttribute("aAlpha",new ae(new Float32Array([0]),1));let et=new ie(Z.color);$.setAttribute("aColor",new ae(new Float32Array([et.r,et.g,et.b]),3));let nt=new Rr($,f);return nt.frustumCulled=!1,n.add(nt),nt}),lt=new Je;lt.setAttribute("position",new ae(new Float32Array(3),3)),lt.setAttribute("aSize",new ae(new Float32Array([16]),1)),lt.setAttribute("aAlpha",new ae(new Float32Array([0]),1)),lt.setAttribute("aColor",new ae(new Float32Array([u.r,u.g,u.b]),3));let J=new Rr(lt,f);J.frustumCulled=!1,n.add(J);let K=7,at=new Float32Array(K*6),yt=new Je;yt.setAttribute("position",new ae(at,3));let mt=new Cr({color:15254915,transparent:!0,opacity:0,blending:wr,depthWrite:!1}),Pt=new As(yt,mt);Pt.frustumCulled=!1,n.add(Pt);let bt=Js.map(()=>new k);function Dt(){c(),_.forEach(Z=>{Z.home.set((Z.fx-.5)*o*.98,(.5-Z.fy)*l*.82,(Z.fz-.5)*520)}),Js.forEach((Z,$)=>bt[$].copy(h(Z.fx,LS,0)))}Dt();let Mt={x:0,y:0,tx:0,ty:0,vel:0,has:!1},F=new k,Gt=new ti(new k(0,0,1),0),vt=new Oa;function Lt(Z){let $=e.domElement.getBoundingClientRect();Mt.tx=(Z.clientX-$.left)/$.width*2-1,Mt.ty=-((Z.clientY-$.top)/$.height)*2+1,Mt.has=!0}xm||window.addEventListener("pointermove",Lt,{passive:!0});let xt=0,V=new _m({lerp:.1,smoothWheel:!0});V.on("scroll",$t.update),$t.create({trigger:cn.scene,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:Z=>{xt=Z.progress}});let Nt=!0;new IntersectionObserver(Z=>{Nt=Z[0].isIntersecting},{threshold:0}).observe(cn.scene),window.addEventListener("resize",Dt),requestAnimationFrame(()=>cn.poster.classList.add("is-hidden"));let T=new k,S=new k,B=performance.now();function rt(Z){let $=Math.min(.05,(Z-B)/1e3);if(B=Z,V.raf(Z),Nt){let et=Z/1e3,nt=Cl(.35,.8,xt),st=(1-Cl(.26,.42,xt))*(xm?0:1),St=Cl(.56,.72,xt);Mt.x+=(Mt.tx-Mt.x)*.12,Mt.y+=(Mt.ty-Mt.y)*.12,vt.setFromCamera({x:Mt.x,y:Mt.y},i),vt.ray.intersectPlane(Gt,F);let Ot=Mt.tx-Mt.x,it=Mt.ty-Mt.y;Mt.vel=fr(Mt.vel,Math.min(1,Math.hypot(Ot,it)*6),.2);let ee=1+Math.sin(et*.6)*.015;for(let ot=0;ot<r;ot++){let j=_[ot];if(T.set(j.home.x+Math.sin(et*j.spd+j.phase)*14,j.home.y+Math.cos(et*j.spd*.9+j.phase)*14,j.home.z+Math.sin(et*.4+j.phase)*20),st>.01&&Mt.has){let re=F.x-T.x,gt=F.y-T.y,ht=F.z-T.z,P=Math.hypot(re,gt,ht),ut=Math.max(0,1-P/320)*26*st;ut>0&&(T.x+=re/P*ut,T.y+=gt/P*ut,T.z+=ht/P*ut)}let ct=bt[j.hub];j.pos.set(fr(T.x,ct.x,nt*.62)*ee,fr(T.y,ct.y,nt*.62)*ee,fr(T.z,ct.z,nt*.62)),g[ot*3]=j.pos.x,g[ot*3+1]=j.pos.y,g[ot*3+2]=j.pos.z;let Wt=.85;if(st>.01){let re=Math.hypot(F.x-j.pos.x,F.y-j.pos.y);Wt+=Math.max(0,1-re/300)*.5*st}p[ot]=Wt,j.sig+=$*(.25+j.spd*.35),j.sig>1&&(j.sig-=1);let Zt=j.sig;D[ot*3]=fr(j.pos.x,ct.x,Zt),D[ot*3+1]=fr(j.pos.y,ct.y,Zt),D[ot*3+2]=fr(j.pos.z,ct.z,Zt),X[ot]=nt*Math.sin(Zt*Math.PI)}x.attributes.position.needsUpdate=!0,x.attributes.aAlpha.needsUpdate=!0,Y.attributes.position.needsUpdate=!0,Y.attributes.aAlpha.needsUpdate=!0;for(let ot=0;ot<C.length;ot++){let j=_[C[ot][0]].pos,ct=_[C[ot][1]].pos;A[ot*6]=j.x,A[ot*6+1]=j.y,A[ot*6+2]=j.z,A[ot*6+3]=ct.x,A[ot*6+4]=ct.y,A[ot*6+5]=ct.z}w.attributes.position.needsUpdate=!0,I.opacity=fr(.4,.08,nt);for(let ot=0;ot<r;ot++){let j=_[ot].pos,ct=bt[_[ot].hub];M[ot*6]=j.x,M[ot*6+1]=j.y,M[ot*6+2]=j.z,M[ot*6+3]=ct.x,M[ot*6+4]=ct.y,M[ot*6+5]=ct.z}if(N.attributes.position.needsUpdate=!0,tt.opacity=nt*.5,Q.forEach((ot,j)=>{ot.geometry.attributes.position.setXYZ(0,bt[j].x,bt[j].y,bt[j].z),ot.geometry.attributes.position.needsUpdate=!0,ot.geometry.attributes.aSize.setX(0,22+nt*30+Math.sin(et*1.4+j)*3),ot.geometry.attributes.aSize.needsUpdate=!0,ot.geometry.attributes.aAlpha.setX(0,nt*.9),ot.geometry.attributes.aAlpha.needsUpdate=!0}),lt.attributes.position.setXYZ(0,F.x,F.y,F.z),lt.attributes.position.needsUpdate=!0,lt.attributes.aAlpha.setX(0,st*(.5+Mt.vel*.5)),lt.attributes.aAlpha.needsUpdate=!0,st>.01&&Mt.has){let ot=_.map((j,ct)=>({i:ct,d:Math.hypot(F.x-j.pos.x,F.y-j.pos.y,F.z-j.pos.z)})).sort((j,ct)=>j.d-ct.d).slice(0,K);for(let j=0;j<K;j++){let ct=_[ot[j].i].pos;at[j*6]=F.x,at[j*6+1]=F.y,at[j*6+2]=F.z,at[j*6+3]=ct.x,at[j*6+4]=ct.y,at[j*6+5]=ct.z}yt.attributes.position.needsUpdate=!0,mt.opacity=st*(.15+Mt.vel*.75)}else mt.opacity=0;let Ct=1-Cl(.04,.28,xt);cn.headline.style.opacity=Ct,cn.headline.style.transform=`translateY(calc(-50% - ${xt*40}px))`,cn.headline.style.pointerEvents=Ct<.1?"none":"auto",cn.pillarsWrap.classList.toggle("is-active",St>.5),cn.pillarsWrap.setAttribute("aria-hidden",St>.5?"false":"true"),cn.pillars.forEach((ot,j)=>{S.copy(bt[j]).project(i),ot.style.left=(S.x*.5+.5)*s+"px",ot.style.top=(-S.y*.5+.5)*a+"px",ot.style.opacity=St,ot.style.pointerEvents=St>.6?"auto":"none"}),e.render(n,i)}requestAnimationFrame(rt)}requestAnimationFrame(rt)}US();NS();if(DS||!window.WebGLRenderingContext)ym();else try{OS()}catch(r){console.warn("bios-Welt: WebGL scene unavailable, using static fallback.",r),ym()}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
