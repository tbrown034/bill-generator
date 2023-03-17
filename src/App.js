import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Write Your own Bill</h1>
      <h2>
        How to use: Describe a bill that you would like to see the Oklahoma
        Legislautre pass. Be as descriptive as possible.
      </h2><form>
  <label for="bill-textarea">Enter your proposed bill:</label>
  <textarea id="bill-textarea" name="bill" rows="10"></textarea>
  <button id="submit-button" type="submit">Submit</button>
</form>
    </div>
  );
}

export default App;
