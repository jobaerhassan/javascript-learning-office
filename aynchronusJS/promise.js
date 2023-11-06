const hasMeeting = false;

const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting) {
        const meetingDetailes = {
            name: "Technical meeting",
            location: "Google Meet",
            time: "10:00 PM",
        }
        resolve(meetingDetailes);
    } else {
        reject(new Error("meeting already scheduled!"));
    }
})

const addToCalender = (meetingDetailes) => {
    const calender = `${meetingDetailes.name} has been scheduled at ${meetingDetailes.time}`
    return Promise.resolve(calender)
}
meeting
    .then(addToCalender)
    .then((res)=>{
        //resolved data
        console.log(JSON.stringify(res))
    })
    .catch((err)=>{
        //rejected data
        console.log(err.message)
    })
console.log("hello world")