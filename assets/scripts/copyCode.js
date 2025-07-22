document.addEventListener('DOMContentLoaded', function() {
  const copyCodeButtons = document.querySelectorAll('.copy-code-button');

  copyCodeButtons.forEach((copyCodeButton) => {
    copyCodeButton.addEventListener('click', () => {
      // Find the next code block after the header
      const codeHeader = copyCodeButton.closest('.code-header');
      let codeBlock = null;
      
      // Try multiple selectors to find the code block
      const nextElement = codeHeader.nextElementSibling;
      if (nextElement) {
        // Look for code in various possible structures
        codeBlock = nextElement.querySelector('code') || 
                   nextElement.querySelector('pre') ||
                   (nextElement.tagName === 'PRE' ? nextElement : null) ||
                   (nextElement.classList.contains('highlight') ? nextElement : null);
      }
      
      if (!codeBlock) {
        console.log('Could not find code block');
        return;
      }
      
      const code = codeBlock.innerText || codeBlock.textContent;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
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
      } else {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          copyCodeButton.innerText = 'Copied!';
          setTimeout(() => {
            copyCodeButton.innerText = 'Copy template to clipboard';
          }, 2000);
        } catch (err) {
          console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textArea);
      }
    });
  });
});