function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true });
classifier = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/.json"
,modelReady )  ;  

}

function modelReady()
{

classifier.classify(gotResults);

}

function gotResult(error,results)
    {
if (error) {
console.error(error);
} else
{
console.log(results);
ramdom_number_r = Math.floor(Math.ramdon() * 225) +1;
ramdom_number_g = Math.floor(Math.ramdon() * 225) +1;
ramdom_number_b = Math.floor(Math.ramdon() * 225) +1;
}

document.getElementById("result_label").innerHTML = "i can hear -"+
result[0].label;
document.getElementById("result_confidence").innerHTML = "Accuray -"+
(result[0].confidence*100).toFixed(2)+"%"
document.getElementById("result_label").style.color = "rbg("
+random_number_r+","+ramdom_number_g+","+ramdom_number_r+")"
document.getElementById("result_confidence").style.color = "rbg("
+random_number_r+","+ramdom_number_g+","+ramdom_number_r+")"


img = document.getElementById('Screenshot 2024-02-12 093848.png')
img1 = document.getElementById('Screenshot 2024-02-12 093856.png')
img2 = document.getElementById('Screenshot 2024-02-12 094030.png')
img3 = document.getElementById('Screenshot 2024-02-12 094105.png')


if (result[0].label == "Barking"  )
{
img.src = 'Screenshot 2024-02-12 093848.png';
img1.src = 'Screenshot 2024-02-12 093856.png';
img2.src = 'Screenshot 2024-02-12 094030.png';
img3.src = 'Screenshot 2024-02-12 094105.png';

} 

else if (result[0].label == "bell"  )
{
    img.src = 'Screenshot 2024-02-12 093848.png';
    img1.src = 'Screenshot 2024-02-12 093856.png';
    img2.src = 'Screenshot 2024-02-12 094030.png';
    img3.src = 'Screenshot 2024-02-12 094105.png';
}
else if (result[0].label == "Snapping"  )
{
    img.src = 'Screenshot 2024-02-12 093848.png';
    img1.src = 'Screenshot 2024-02-12 093856.png';
    img2.src = 'Screenshot 2024-02-12 094030.png';
    img3.src = 'Screenshot 2024-02-12 094105.png';

} else  {
    img.src = 'Screenshot 2024-02-12 093848.png';
    img1.src = 'Screenshot 2024-02-12 093856.png';
    img2.src = 'Screenshot 2024-02-12 094030.png';
    img3.src = 'Screenshot 2024-02-12 094105.png';

}

}
