class userData {
    constructor(id, isActive, picture, balance, client, gender) {
        this.id = id;
        this.isActive = isActive;
        this.picture = picture;
        this.balance = balance;
        this.client = client;
        this.gender = gender;
    }
}

var user1 = new userData("1", true, "http://placehold.it/32x32", 2853.33, "Ana García", "femenino");
var user2 = new userData("2", false, "http://placehold.it/32x32", 1500.50, "Carlos López", "masculino");
var user3 = new userData("3", true, "http://placehold.it/32x32", 3200.75, "María Rodríguez", "femenino");
var user4 = new userData("4", true, "http://placehold.it/32x32", 1850.25, "Juan Martínez", "masculino");
var user5 = new userData("5", false, "http://placehold.it/32x32", 2750.80, "Laura Hernández", "femenino");
var user6 = new userData("6", true, "http://placehold.it/32x32", 4100.90, "Roberto Silva", "masculino");
var user7 = new userData("7", true, "http://placehold.it/32x32", 1950.60, "Sofia Castro", "femenino");

const users = [user1, user2, user3, user4, user5, user6, user7];