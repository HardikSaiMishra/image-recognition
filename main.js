Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 200
 });
 Webcam.attach("#Webcam")
 function takesnapshot(){
   Webcam.snap(function (data_uri) {
     document.getElementById("Result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
 });
}
console.log(ml5.version) 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lsuRGJOBV/model.json', modelLoaded);   // import the model
 
function modelLoaded(){
 console.log('Model Loaded!');
}
 function identifyimage(){
   var img= document.getElementById("selfie_image");
   classifier.classify(img,GotResult);
 }
 function GotResult(error,results){
   if(error){
     console.error(error);

   }
   else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
   }
 }
