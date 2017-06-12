class userRegistration{
    private _userName : string;
    
    get userName(): string {
        return this._userName;
    }
    set userName(iUserName: string) {
        this._userName = iUserName;
    }
    checkValidUser() : string {
        if(this._userName == "Admin") {
            return `${this._userName} is a valid user`;
        }
        else{
            return(`${this._userName} is Unauthorized user!`);
        }
    }
}