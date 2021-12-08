class Post {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDeleted = false;
    }

    edit(title, description) {
        this.title = title;
        this.description = description;
    }

    delete() {
        this.isDeleted = true;
    }
}

module.exports = Post