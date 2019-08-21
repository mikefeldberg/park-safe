var mongoose = require('mongoose');

var mainmodelSchema = new mongoose.Schema({
    userId: String,
    deletedAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('MAINMODEL', mainmodelSchema);