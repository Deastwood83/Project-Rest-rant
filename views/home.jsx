const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>

      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/food1.png" width="300px" margin="auto"

            alt="Muffinz"
          />
          <div>
          Photo by <a href="https://www.pinterest.dk/pin/857583954025466080/"></a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;