const musicController = document.querySelector('.musicplayer')
const prevBtn = document.querySelector('#pr')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#ne')
const audio = document.querySelector('#music')
const seek = document.querySelector('.seek')
const seekLine = document.querySelector('.seekline')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')



const songs=['Maza','Goat', 'Angaar', 'Aabaad']

let songIndex = 1

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}


function playSong(song){
    musicController.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(song){
    musicController.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong(){
songIndex--
if(songIndex<0){
    songIndex= songs.length - 1
}
loadSong(songs[songIndex])
playSong(songs)
}


function nextSong(){
    songIndex++
if(songIndex>songs.length - 1){
    songIndex= 0
}
loadSong(songs[songIndex])
playSong(songs)
}


function moveseek(e){
const{duration, currentTime} = e.srcElement

const calci = (currentTime / duration)
const percentSeek = calci *100


seek.style.width = `${percentSeek}%`
dot.style.left = `${percentdot}%`


}

function progressbar(e){
const width = this.clientWidth
const clickX = e.offsetX
const duration = audio.duration

audio.currentTime = (clickX / width) * duration
}

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicController.classList.contains('play')
    if (isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})



prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', moveseek)
seekLine.addEventListener('click',progressbar)
audio.addEventListener('ended', nextSong)

