class showTime {

    init() {
        const columns = document.querySelectorAll('.col');
        this.arrayColumns = Array.from(columns); 

        const check = this.arrayColumns.map(index => {
            // console.log(index);
    
            for(let j=0; j<10; j++) {
                const span = `<span>${j}</span>`;
                index.innerHTML += span;
            }
    
            if(index.id == 1) {
                index.innerHTML = `
                <span>0</span> 
                <span>1</span> 
                <span>2</span>`;
            }
            if(index.id == 3) {
                index.innerHTML = `
                <span>0</span> 
                <span>1</span> 
                <span>2</span> 
                <span>3</span> 
                <span>4</span> 
                <span>5</span>`;
            }  
        });
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        hours < 10 ? hours = `0${hours}` : hours; 
        let minutes = date.getMinutes();
        minutes < 10 ? minutes = `0${minutes}` : minutes;
        let seconds = date.getSeconds();
        seconds < 10 ? seconds = `0${seconds}` : seconds;

        this.timeArray = Array.from(`${hours}${minutes}${seconds}`);
        // console.log(this.timeArray);
    }

    animate() {
        const moveColumns = this.arrayColumns.map(index => {
            // console.log(timeArray[index.id -1]);
            index.style.marginTop = `-${(this.timeArray[index.id -1])*30}px`;
        });
    }

    start() {
        this.init();
        this.render();
        this.animate();

        this.timer = setInterval( () => {
            this.render();
            this.animate();
        }, 1000);
    }
}

const clock = new showTime();
clock.start();
