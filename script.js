    function revelarPresente() {
      document.getElementById("modalPresente").style.display = "block";
    }

    function fecharModal() {
      document.getElementById("modalPresente").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("modalPresente");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };


    // Gerar corações flutuantes
    const container = document.getElementById('coracoes');
    function criarCoracao() {
      const coracao = document.createElement('div');
      coracao.classList.add('coracao');
      coracao.style.left = Math.random() * 100 + 'vw';
      coracao.style.animationDuration = (6 + Math.random() * 4) + 's';
      container.appendChild(coracao);

      setTimeout(() => {
        coracao.remove();
      }, 10000);
    }
    setInterval(criarCoracao, 300);