Pebble.addEventListener("ready",
  function(e) {
    console.log("PebbleKit JS ready!");
    setTimeout(checkStorage, 1000);
  }
);

function checkStorage() {
  var key = 5;
  var value = localStorage.getItem(key);
  console.log("Value = " + value);
  setTimeout(checkStorage, 1000);
}

Pebble.addEventListener("showConfiguration",
  function(e) {
    console.log("opening remote url");
    Pebble.openURL("https://www.googledrive.com/host/0B47xKA4K0LGJeGJPdVdac0I5bnc");
  }
);

Pebble.addEventListener("webviewclosed",
  function(e) {
  }
);


/*
<!DOCTYPE html>
<html>
  <body>
    <h1>Pebble LocalStorage</h1>
    <script>
        function saveStorage() {
            var key = 5;
            var value = localStorage.getItem(key);
            document.documentElement.innerHTML = document.documentElement.innerHTML + "Value Was: " + value + "<BR>";
            var value = Math.round(Math.random()*100);
            localStorage.setItem(key, value);
            document.documentElement.innerHTML = document.documentElement.innerHTML + "Saving New Value: " + value + "<BR>";
        }

        function checkStorage() {
            var key = 5;
            var value = localStorage.getItem(key);
            document.documentElement.innerHTML = document.documentElement.innerHTML + "Value = " + value + "<BR>";
            setTimeout(checkStorage, 1000);
        }

        setTimeout(checkStorage, 1000);
        setTimeout(saveStorage, 500);
    </script>
  </body>
</html>
*/