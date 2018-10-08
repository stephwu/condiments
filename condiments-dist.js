"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  "use strict";

  function Sauce(props) {
    /* Inside JSX */
    /* <h2> {props.sauce.name}, {props.sauce.title} </h2> */
    return React.createElement(
      "article",
      { className: "sauce" },
      React.createElement(
        "h2",
        null,
        " ",
        props.sauce.name,
        " "
      ),
      React.createElement("img", { src: props.sauce.img, alt: props.sauce.name, sizes: "(max-width: 291px) 100vw, 291px" }),
      React.createElement(
        "ul",
        { className: "description" },
        React.createElement(
          "li",
          null,
          props.sauce.desc
        ),
        React.createElement(
          "li",
          null,
          props.sauce.origin
        ),
        React.createElement(
          "li",
          null,
          props.sauce.ingred
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: props.sauce.buy + " ", rel: "noopener noreferrer", target: "_blank" },
            "Where to Buy"
          )
        )
      )
    );
  }

  function Condiment(props) {
    return React.createElement(
      "main",
      { className: "results" },
      React.createElement(
        ReactTransitionGroup.TransitionGroup,
        null,
        props.condiment.map(function (sauce) {
          return React.createElement(
            ReactTransitionGroup.CSSTransition,
            { key: sauce.id,
              classNames: {
                enter: "animated",
                enterActive: "rollIn",
                exit: "animated",
                exitActive: "rollOut"
              }, timeout: 1000 },
            React.createElement(Sauce, { sauce: sauce })
          );
        })
      )
    );
  }

  function Filters(props) {
    var titles = window.ACDirectory.titles;
    var madein = window.ACDirectory.madein;

    // ORIGINAL FUNCTION WRITTEN
    // function updateName(e) {
    //   props.updateFormState("currentName", e.target.value);
    // }

    function updateName(e) {
      props.updateFormState({ currentName: e.target.value });
    }

    function updateCategory(e) {
      props.updateFormState({ currentCategory: e.target.value });
    }

    function updateOrigin(e) {
      props.updateFormState({ currentOrigin: e.target.value });
    }

    function resetFilters() {
      props.updateFormState({
        currentName: "",
        currentCategory: "",
        currentOrigin: ""
      });
    }

    return React.createElement(
      "form",
      { action: "", id: "directory-filters" },
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          { "for": "sauce-name" },
          "Name:"
        ),
        React.createElement("input", { type: "text", name: "sauceName", placeholder: "Condiment", id: "sauce-name",
          value: props.currentName,
          onChange: updateName })
      ),
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          { htmlFor: "sauce-cat" },
          "Category:"
        ),
        React.createElement(
          "select",
          { name: "sauceCat", id: "sauce-cat",
            value: props.currentCategory,
            onChange: updateCategory },
          React.createElement(
            "option",
            { value: "" },
            "- Select -"
          ),
          titles.map(function (title) {
            return React.createElement(
              "option",
              { value: title.key, key: title.key },
              title.display
            );
          })
        )
      ),
      React.createElement(
        "div",
        { className: "group" },
        React.createElement(
          "label",
          { htmlFor: "sauce-origin" },
          "Made in:"
        ),
        React.createElement(
          "select",
          { name: "sauceOrigin", id: "sauce-origin",
            value: props.currentOrigin,
            onChange: updateOrigin },
          React.createElement(
            "option",
            { value: "" },
            "- Select -"
          ),
          madein.map(function (title) {
            return React.createElement(
              "option",
              { value: title.key, key: title.key },
              title.display
            );
          })
        )
      ),
      React.createElement(
        "div",
        { className: "group" },
        React.createElement("input", { type: "reset", value: "Reset Filters", onClick: resetFilters })
      )
    );
  }

  var Directory = function (_React$Component) {
    _inherits(Directory, _React$Component);

    function Directory(props) {
      _classCallCheck(this, Directory);

      var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

      _this.state = {
        condiment: window.ACDirectory.condiment,
        currentName: "",
        currentCategory: "",
        currentOrigin: ""
      };

      _this.updateFormState = _this.updateFormState.bind(_this);
      return _this;
    }

    // ORIGINAL CODE BEFORE RESET BUTTON
    // updateFormState(name, val) {
    //   this.setState(
    //     {
    //       [name]: val
    //     },
    //     this.updateCondimentList
    //   );
    // }

    _createClass(Directory, [{
      key: "updateFormState",
      value: function updateFormState(spec) {
        this.setState(spec, this.updateCondimentList);
      }

      // Search the whole condiment list with current filters

    }, {
      key: "updateCondimentList",
      value: function updateCondimentList() {
        var filteredCondiment = window.ACDirectory.condiment.filter(function (sauce) {
          return (this.state.currentName === "" || sauce.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1 || sauce.ingred.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1) && (this.state.currentCategory === "" || sauce.title_cat === this.state.currentCategory) && (this.state.currentOrigin === "" || sauce.made_cat === this.state.currentOrigin);
        }.bind(this));

        this.setState({
          condiment: filteredCondiment
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "condiment-directory" },
          React.createElement(
            "header",
            null,
            React.createElement(
              "h1",
              null,
              "Asian Condiments and Seasonings"
            )
          ),
          React.createElement(
            "p",
            null,
            "Learn more about each condiment & seasoning in this directory."
          ),
          React.createElement(Filters, {
            currentName: this.state.currentName,
            currentCategory: this.state.currentCategory,
            currentOrigin: this.state.currentOrigin,
            updateFormState: this.updateFormState
          }),
          React.createElement(Condiment, { condiment: this.state.condiment })
        );
      }
    }]);

    return Directory;
  }(React.Component); // Close Directory class

  ReactDOM.render(React.createElement(Directory, null), document.getElementById("directory-root"));
})();
//# sourceMappingURL=condiments-dist.js.map