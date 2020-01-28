User.delete_all
Timer.delete_all
<<<<<<< HEAD

User.create(
    email: "admin@test.com",
    password: "password"
)

Timer.create(
    name: 'Lunch',
    end_time: '12:00:00',
    types: 'lunch',
    active: false
)

=======
User.create(
    email: "admin@test.com",
    password: "password11"
)
Timer.create(
    name: 'Lunch',
    end_time: '12:00:00',
    types: 'lunch',
    active: false
)
>>>>>>> removing errors
Timer.create(
    name: 'Event',
    end_time: '17:00:00',
    types: 'event',
    active: false
)
<<<<<<< HEAD

=======
>>>>>>> removing errors
puts 'Data seeded'