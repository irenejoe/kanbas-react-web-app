import ES5Functions from "./ES5Function";
import ArrowFunction from "./ArrowFunction"
import ImpliedReturn from "./ImpliedReturn"
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters"

function WorkingWithFunctions() {
    return (
      <div>
        <h2>Working with Functions</h2>
        <ES5Functions />
        <ArrowFunction />
        <ImpliedReturn />
        <FunctionParenthesisAndParameters />
      </div>
    );
  }
  
  export default WorkingWithFunctions;