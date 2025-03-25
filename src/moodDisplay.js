function MoodDisplay({Mood}){

    const moods ={
        Happy:"keep smiling!😊",
        Sleepy:"sleep give peace 🕊️",
        Sad:"it ok to be sad sometimes😔",
        Angry:"take a deep breath 😡",
    };

    return (
        <div>
            {Mood? <p>{moods[Mood]}</p>:<p>Select your mood above</p>}
        </div>
    );
}
export default MoodDisplay;