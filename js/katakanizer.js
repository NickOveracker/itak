// Convert the input from latin characters to katakana.
function convert()
{
  let input = document.getElementById('katakanizer-input').value;
  let placeholder = document.getElementById('katakanizer-input').placeholder;
  let output = "";

  // Case 1: User input
  if(input.length > 0)
  {
    let words = input.split(" ");
    let punctuation = "";
    
    // The input is split by space characters.
    // Convert each word individually.
    // Allow ONE period or comma after each word.
    for(let ii = 0; ii < words.length; ii++) {
      // Comma after word?
      if(words[ii].charAt(words[ii].length-1) === ',') {
        punctuation = "、";
        words[ii] = words[ii].substring(0,words[ii].length-1);
      }
      // Period after word?
      else if(words[ii].charAt(words[ii].length-1) === '.') {
        punctuation = "。";
        words[ii] = words[ii].substring(0,words[ii].length-1);
      }
      
      // Add to the output string.
      output += latinToKana(words[ii]) + punctuation;
      
      // Add a space if necessary.
      if(words.length - 1 > ii) {
        output += "　";
      }
    } // end for loop
  } // end case 1 (user input)
  // Case 2: No user input (use placeholder).
  else
  {
    output = latinToKana(placeholder);
  }
  
  // Final output
  document.getElementById("katakanizer-output").value = output;
}
