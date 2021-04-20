var users = [
  {
    name: "Lucy",
    gender: "F",
    age: 20,
    hobby: "pets",
    avatar: "avatar1.png",
  },
  {
    name: "Betty",
    gender: "F",
    age: 21,
    hobby: "pets",
    avatar: "avatar2.png",
  },
  {
    name: "Ronald",
    gender: "M",
    age: 22,
    hobby: "music",
    avatar: "avatar3.png",
  },
  {
    name: "Christopher",
    gender: "M",
    age: 24,
    hobby: "sports",
    avatar: "avatar4.png",
  },
  {
    name: "Ximena",
    gender: "F",
    age: 23,
    hobby: "reading",
    avatar: "avatar5.png",
  },
  {
    name: "Paul",
    gender: "M",
    age: 25,
    hobby: "shopping",
    avatar: "avatar6.png",
  },
  {
    name: "Charlie",
    gender: "M",
    age: 22,
    hobby: "pets",
    avatar: "avatar7.png",
  },
];

window.addEventListener("load", function () {
  var results = document.getElementById("results");

  function search() {
    //get hobby
    var hobbyField = document.getElementById("hobby");
    var hobby = hobbyField.value;

    //get gender
    var genderField = document.getElementById("gender");
    var s = genderField.selectedIndex;
    var gender = genderField.options[s].value;

    //get age
    var minAgeField = document.getElementById("minimum-age");
    var minIdx = minAgeField.selectedIndex;
    var minimumAge = minAgeField.options[minIdx].value;
    var maxAgeField = document.getElementById("maximum-age");
    var maxIdx = maxAgeField.selectedIndex;
    var maximumAge = maxAgeField.options[maxIdx].value;

    var resultsHtml = "";
    var usersLength = users.length;

    for (var i = 0; i < usersLength; i++) {
      //check gender
      if (gender == "A" || gender == users[i].gender) {
        //check age
        var userAge = users[i].age;
        if (userAge >= minimumAge && userAge <= maximumAge) {
          //check hobby
          if (hobby == "" || hobby == users[i].hobby) {
            resultsHtml +=
              '<div class="person-row">\
                            <img src="images/' +
              users[i].avatar +
              '" />\
                            <div class="person-info">\
                            <div>' +
              users[i].name +
              "</div>\
                            <div>" +
              users[i].hobby +
              "</div></div>\
                                <button>Add as friend</button></div>";
          }
        }
      }
    }

    results.innerHTML = resultsHtml;
  }

  var searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", search);
});
