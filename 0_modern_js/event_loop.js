console.log("Start");

async function test1() {
  const data = await fetch(
    "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  );
  console.log(await data.json());
}

function test2() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.whatdoestrumpthink.com/api/v1/quotes/random");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      new Error(xhr.statusText);
    }
    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };
    xhr.send();
  };
}

const timeout = () => {
  setTimeout(() => {
    console.log("Timeout");
  }, 100);
};

test1();
test2();
timeout();

console.log("End");
