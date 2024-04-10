interface IMessage{
    id: number;
    username: String;
    message: String;
    chatroomId: number
}

class Message{
    public id: number;
    public username: String;
    public message: String;
    public chatroomId: number;
    
    constructor(un: String, m: String, cid: number){
        this.id = 0;
        this.username = un;
        this.message = m;
        this.chatroomId = cid;
    }

    toString(){
        return `id:${this.id} username:${this.username} message: ${this.message}`
    }
}

export default Message;