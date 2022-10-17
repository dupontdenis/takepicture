
let mood = document.querySelector("#mood");
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");


camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	  video.srcObject = stream;
});

click_button.addEventListener('click', async function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image64 = canvas.toDataURL('image/jpeg');
     
     let mood = document.querySelector("#mood").value;
   	// data url of the image
     const data = { mood, image64 };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch("/api", options);
        const json = await response.json();
        // console.log(json);
});
