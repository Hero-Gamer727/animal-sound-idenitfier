function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/v0gJm5FQA/model.json",modelReady);
    }
    
    function modelReady(){
     classifier.classify(gotResults);
    }
    
     function gotResults(error,results){
    if(error){
        console.log(error)
    }else{
    console.log(results)
    document.getElementById("result_label").innerHTML=results[0].label;
    randomNumberR = Math.floor(Math.random()*255)+1;
randomNumberG = Math.floor(Math.random()*255)+1;
randomNumberB = Math.floor(Math.random()*255)+1;
document.getElementById("h3").style.color = "rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
document.getElementById("results_label").innerHTML=results[0].label;
    img  = document.getElementById("animal_image");

    if(results[0].label == "Dog"){
    img.src="dog.gif";
    }else if(results[0].label == "Cat"){
        img.src="cat.gif";

    }else if(results[0].label == "Lion"){
        img.src="lion.gif";
    }else if(results[0].label == "Parrot"){
        img.src="parrot.gif"
    }
    }
     }