import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Cards from './Cards'

function App() {
  //const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  };

  const handleClick2 = () => {
    fetch("http://localhost:3000/users", { method: 'POST' })
      .then(response => response.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  };


//   const handleClick3 = (e)=> {
//     clear();
//     $("footer").hide();
//     e.preventDefault();
//     $div=$("<div id='addDiv' class='card' style='width:25rem:'></div>")
//     $input=$('<input class="form-control" type="text" placeholder="quote" aria-label="default input example">')
//     $input1=$('<input class="form-control" type="text" placeholder="dayNumber" aria-label="default input example">')
//     $input2=$('<input class="form-control" type="text" placeholder="warmup in minutes" aria-label="default input example">')
//     var $a=$("<a id='submit' class='btn btn-primary'>Submit</a>");
//     $("#body").append($div)
//     $div.append($input, $input1, $input2, $input3, $input4, $input5, $a)  
//     $('#submit').on('click', function(){
//         fetch(apiURL + 'api/workouts', {
//             method:"POST",
//             body:JSON.stringify({
//                 quote:$input.val(),
//                 day_num:$input1.val(),
//                 warmup:$input2.val(),
//                 pushups:$input3.val(),
//                 situps:$input4.val(),
//                 run:$input5.val()
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(res => res.json())
//         .then(data =>{
//             $div.hide()
//             var $newWorkoutDiv =$("<div class='ty'></div>")
//             $(".flex-container").append($newWorkoutDiv)
//             var $img=$("<img class='card-img-top' height='900px'></img>");
//             $img.attr('src', 'https://media.tenor.com/N7u5cEzdT-YAAAAC/neon-sign-check-mark.gif')
//             $newWorkoutDiv.append($img)
//         })
//     })                        
// });

  const propsBucket = {
    users,
    setUsers,
    handleClick,
    handleClick2
  };



  return (
    <div className="App">
      <button id="button" onClick={handleClick}>GET ALL GYM USERS</button>
      <button onClick={handleClick2}>ADD NEW USER</button>
      <Cards {...propsBucket} />

    </div>
  )
}

export default App

















  //   $(".button").on("click", function(){


  //     fetch("https://randomfox.ca/floof/")
  //         .then(response => response.json())
  //         .then(result => {
  //             $(".image")[0].src = result.image})
  //             setTimeout(()=>{
  //                 fetch("https://randomfox.ca/floof/")
  //                 .then(response => response.json())
  //                 .then(result => {
  //                     $(".image")[0].src = result.image})
  //             }, "2000");    

  // });
  // }