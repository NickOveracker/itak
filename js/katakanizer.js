function convert()
{
  let input = document.getElementById('katakanizer-input').value;
  let placeholder = document.getElementById('katakanizer-input').placeholder;

  if(input.length > 0)
  {
    document.getElementById("katakanizer-output").innerText = latinToKana(input);
  }
  else
  {
    document.getElementById("katakanizer-output").innerText = latinToKana(placeholder);
  }
}
