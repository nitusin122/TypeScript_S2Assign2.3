var userRegistration = (function () {
    function userRegistration() {
    }
    Object.defineProperty(userRegistration.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (iUserName) {
            this._userName = iUserName;
        },
        enumerable: true,
        configurable: true
    });
    userRegistration.prototype.checkValidUser = function () {
        if (this._userName == "Admin") {
            return this._userName + " is a valid user";
        }
        else {
            return (this._userName + " is Unauthorized user!");
        }
    };
    return userRegistration;
}());
