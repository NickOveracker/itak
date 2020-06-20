// Convert the input from latin characters to katakana.
function convert()
{
  let input = document.getElementById('katakanizer-input').value;
  let output = "";
  let punctuation = "";
  
  // If no user input, use the placeholder.
  if(input.length <= 0) {
    input = document.getElementById('katakanizer-input').placeholder;
  }
  
  // Split the input into individual words.
  let words = input.split(" ");

  // The input is split by space characters.
  // Convert each word individually.
  // Allow ONE period, comma, or question mark after each word.
  for(let ii = 0; ii < words.length; ii++) {
    // Ignore empty strings.
    if(words[ii].length === 0) continue;
    
    // Handle ONE punctuation mark per word.
    switch(words[ii].charAt(words[ii].length-1)) {
    case ',':
      punctuation = "、";
      words[ii] = words[ii].substring(0,words[ii].length-1);
      break;
    case '.':
      punctuation = "。";
      words[ii] = words[ii].substring(0,words[ii].length-1);
      break;
    case '?':
      punctuation = "？";
      words[ii] = words[ii].substring(0,words[ii].length-1);
      break;
    }

    // Add to the output string.
    output += latinToKana(words[ii]) + punctuation;

    // Add a space if necessary.
    if(words.length - 1 > ii) {
      output += "　";
    }
  } // end for loop
  
  // Final output
  document.getElementById("katakanizer-output").value = output;
}
