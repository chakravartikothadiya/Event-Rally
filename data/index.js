const usersData = require("./users");
const profileData = require("./profile");
const eventsData = require("./events");
const commentsData = require("./comments");
const followersData = require("./followers");
const reportsData = require("./reports");
const likesData = require("./likes");
const validations = require("./validation")
const adminData = require('./admin');

module.exports = {
    users: usersData,
    profile: profileData,
    events: eventsData,
    comments: commentsData,
    followers: followersData,
    reports: reportsData,
    likes: likesData,
    validationFunctions: validations,
    adminData: adminData
};