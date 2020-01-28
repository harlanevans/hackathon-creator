User.delete_all
Timer.delete_all

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

Timer.create(
    name: 'Event',
    end_time: '17:00:00',
    types: 'event',
    active: false
)
puts 'Data seeded'