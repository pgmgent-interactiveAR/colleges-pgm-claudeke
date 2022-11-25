(() => {
    const app = {
        init() {
            this.cacheElements();
            //this.orbitAni(); 
            this.chosenModel();
        },
        cacheElements() {
            this.$btnOrbit = document.querySelector('.btn__orbit');

            this.$modelBtnVirus = document.querySelector('.btn__virus');
            this.$modelBtnDino = document.querySelector('.btn__dino');

            this.$modelVirus = document.querySelector('.virus');
            this.$modelDino = document.querySelector('.dino');
        },
        orbitAni() {
            this.$btnOrbit.addEventListener('click', (e) => {
                console.log('clicked');
            })
        },
        chosenModel() {
            this.$modelBtnVirus.addEventListener('click', (ev) => {
                console.log('clicked virus')
                this.$modelVirus.classList.remove('hide');
                this.$modelDino.classList.add('hide');
            });

            this.$modelBtnDino.addEventListener('click', (ev) => {
                console.log(this.$modelVirus.classList)
                console.log(this.$modelDino.classList)
                this.$modelVirus.classList.add('hide');
                this.$modelDino.classList.remove('hide');
            });

            console.log(this.$modelDino.classList)
        }
    }
    app.init();
})();

