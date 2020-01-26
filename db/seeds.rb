1.times do course = Course.create(
    name: 'Winter Part-Time 2019'
)
1.times do event = Event.create(
    name: 'Hackathon I 2019',
    rubric: '',
    course_id = course.id
)


end

puts 'Data seeded'