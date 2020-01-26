# 1.times do course = Course.create(
#     name: 'Winter Part-Time 2019'
# )
# 1.times do event = Event.create(
#     name: 'Hackathon I 2019',
#     rubric: '',
#     course_id = course.id
# )

1.times do Timer.create(
    name: "Hackathon I 2020",
    start_time: "09:00:00",
    end_time: "17:00:00",
    complete: false, 
    types: "event",
    active: true
)
end

puts 'Data seeded'