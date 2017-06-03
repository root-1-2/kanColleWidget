/**
 * This class lets you encode animated GIF files
 * Base class :  http://www.java2s.com/Code/Java/2D-Graphics-GUI/AnimatedGifEncoder.htm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 * @license
 */
GIFEncoder=function(){for(var i=0,chr={};i<256;i++)chr[i]=String.fromCharCode(i);function ByteArray(){this.bin=[]}ByteArray.prototype.getData=function(){for(var v="",l=this.bin.length,i=0;i<l;i++)v+=chr[this.bin[i]];return v};ByteArray.prototype.writeByte=function(val){this.bin.push(val)};ByteArray.prototype.writeUTFBytes=function(string){for(var l=string.length,i=0;i<l;i++)this.writeByte(string.charCodeAt(i))};ByteArray.prototype.writeBytes=function(array,offset,length){for(var l=length||array.length,i=offset||0;i<l;i++)this.writeByte(array[i])};var exports={};var width;var height;var transparent=null;var transIndex;var repeat=-1;var delay=0;var started=false;var out;var image;var pixels;var indexedPixels;var colorDepth;var colorTab;var usedEntry=[];var palSize=7;var dispose=-1;var closeStream=false;var firstFrame=true;var sizeSet=false;var sample=10;var comment="Generated by jsgif (https://github.com/antimatter15/jsgif/)";var setDelay=exports.setDelay=function setDelay(ms){delay=Math.round(ms/10)};var setDispose=exports.setDispose=function setDispose(code){if(code>=0)dispose=code};var setRepeat=exports.setRepeat=function setRepeat(iter){if(iter>=0)repeat=iter};var setTransparent=exports.setTransparent=function setTransparent(c){transparent=c};var setComment=exports.setComment=function setComment(c){comment=c};var addFrame=exports.addFrame=function addFrame(im,is_imageData){if(im===null||!started||out===null){throw new Error("Please call start method before calling addFrame")}var ok=true;try{if(!is_imageData){image=im.getImageData(0,0,im.canvas.width,im.canvas.height).data;if(!sizeSet)setSize(im.canvas.width,im.canvas.height)}else{image=im}getImagePixels();analyzePixels();if(firstFrame){writeLSD();writePalette();if(repeat>=0){writeNetscapeExt()}}writeGraphicCtrlExt();if(comment!==""){writeCommentExt()}writeImageDesc();if(!firstFrame)writePalette();writePixels();firstFrame=false}catch(e){ok=false}return ok};var finish=exports.finish=function finish(){if(!started)return false;var ok=true;started=false;try{out.writeByte(59)}catch(e){ok=false}return ok};var reset=function reset(){transIndex=0;image=null;pixels=null;indexedPixels=null;colorTab=null;closeStream=false;firstFrame=true};var setFrameRate=exports.setFrameRate=function setFrameRate(fps){if(fps!=15)delay=Math.round(100/fps)};var setQuality=exports.setQuality=function setQuality(quality){if(quality<1)quality=1;sample=quality};var setSize=exports.setSize=function setSize(w,h){if(started&&!firstFrame)return;width=w;height=h;if(width<1)width=320;if(height<1)height=240;sizeSet=true};var start=exports.start=function start(){reset();var ok=true;closeStream=false;out=new ByteArray;try{out.writeUTFBytes("GIF89a")}catch(e){ok=false}return started=ok};var cont=exports.cont=function cont(){reset();var ok=true;closeStream=false;out=new ByteArray;return started=ok};var analyzePixels=function analyzePixels(){var len=pixels.length;var nPix=len/3;indexedPixels=[];var nq=new NeuQuant(pixels,len,sample);colorTab=nq.process();var k=0;for(var j=0;j<nPix;j++){var index=nq.map(pixels[k++]&255,pixels[k++]&255,pixels[k++]&255);usedEntry[index]=true;indexedPixels[j]=index}pixels=null;colorDepth=8;palSize=7;if(transparent!==null){transIndex=findClosest(transparent)}};var findClosest=function findClosest(c){if(colorTab===null)return-1;var r=(c&16711680)>>16;var g=(c&65280)>>8;var b=c&255;var minpos=0;var dmin=256*256*256;var len=colorTab.length;for(var i=0;i<len;){var dr=r-(colorTab[i++]&255);var dg=g-(colorTab[i++]&255);var db=b-(colorTab[i]&255);var d=dr*dr+dg*dg+db*db;var index=i/3;if(usedEntry[index]&&d<dmin){dmin=d;minpos=index}i++}return minpos};var getImagePixels=function getImagePixels(){var w=width;var h=height;pixels=[];var data=image;var count=0;for(var i=0;i<h;i++){for(var j=0;j<w;j++){var b=i*w*4+j*4;pixels[count++]=data[b];pixels[count++]=data[b+1];pixels[count++]=data[b+2]}}};var writeGraphicCtrlExt=function writeGraphicCtrlExt(){out.writeByte(33);out.writeByte(249);out.writeByte(4);var transp;var disp;if(transparent===null){transp=0;disp=0}else{transp=1;disp=2}if(dispose>=0){disp=dispose&7}disp<<=2;out.writeByte(0|disp|0|transp);WriteShort(delay);out.writeByte(transIndex);out.writeByte(0)};var writeCommentExt=function writeCommentExt(){out.writeByte(33);out.writeByte(254);out.writeByte(comment.length);out.writeUTFBytes(comment);out.writeByte(0)};var writeImageDesc=function writeImageDesc(){out.writeByte(44);WriteShort(0);WriteShort(0);WriteShort(width);WriteShort(height);if(firstFrame){out.writeByte(0)}else{out.writeByte(128|0|0|0|palSize)}};var writeLSD=function writeLSD(){WriteShort(width);WriteShort(height);out.writeByte(128|112|0|palSize);out.writeByte(0);out.writeByte(0)};var writeNetscapeExt=function writeNetscapeExt(){out.writeByte(33);out.writeByte(255);out.writeByte(11);out.writeUTFBytes("NETSCAPE"+"2.0");out.writeByte(3);out.writeByte(1);WriteShort(repeat);out.writeByte(0)};var writePalette=function writePalette(){out.writeBytes(colorTab);var n=3*256-colorTab.length;for(var i=0;i<n;i++)out.writeByte(0)};var WriteShort=function WriteShort(pValue){out.writeByte(pValue&255);out.writeByte(pValue>>8&255)};var writePixels=function writePixels(){var myencoder=new LZWEncoder(width,height,indexedPixels,colorDepth);myencoder.encode(out)};var stream=exports.stream=function stream(){return out};var setProperties=exports.setProperties=function setProperties(has_start,is_first){started=has_start;firstFrame=is_first};return exports};