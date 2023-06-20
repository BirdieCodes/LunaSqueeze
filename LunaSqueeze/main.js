document.getElementById('minifyButton').addEventListener('click', function() {
  var inputCode = document.getElementById('inputCode').value;
  var minifiedCode = minifyLuaCode(inputCode);
  downloadLuaFile(minifiedCode, 'minified.lua');
});

function minifyLuaCode(code) {
  code = code.trim();
  code = code.replace(/\s+/g, ' ');
  code = code.split('\n').map(function(line) {
    return line.trim() === '' || line.trim().endsWith(';') ? line : line + ';';
  }).join('\n');

  return code;
}

function downloadLuaFile(code, filename) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(code)
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
