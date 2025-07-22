const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const codeBlock = codeBlocks[index];
  if (!codeBlock) return;
  
  const code = codeBlock.innerText;

  copyCodeButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(code).then(() => {
      const originalText = copyCodeButton.innerText;
      copyCodeButton.innerText = 'Copied!';
      copyCodeButton.classList.add('copied');

      setTimeout(() => {
        copyCodeButton.innerText = originalText;
        copyCodeButton.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      copyCodeButton.innerText = 'Copy failed';
      setTimeout(() => {
        copyCodeButton.innerText = 'Copy template to clipboard';
      }, 2000);
    });
  });
});