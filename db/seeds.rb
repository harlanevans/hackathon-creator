1.times do 
    course = Course.create(name: 'Winter Part-Time 2019')

    1.times do 
        Event.create(
            course_id: course.id,
            name: 'Hackathon I 2019',
            rubric: 'this link doesnt exist'
        )
    end
end

1.times do
    Timer.create(
        name: 'Hackathon III 2020',
        end_time: '17:00:00',
        types: 'event',
        active: true
)
end

1.times do
    Timer.create(
        name: 'Lunch',
        end_time: '12:00:00',
        types: 'lunch',
        active: true
)
end

puts 'Data seeded'