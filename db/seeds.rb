Mixtape.destroy_all

grunge = Mixtape.create!({
    title: "Grunge Mix",
    created_by: "Kurt's Biggest Fan",
    created_for: "My 'In Bloom'",
    dedication: "Thought you would appreciate this mix, to remind you of when we first met!"
})

eighties_rock = Mixtape.create!({
    title: "80's Rock",
    created_by: "Vince Neil's Hair",
    created_for: "My High School Crush",
    dedication: "It wasn't me ... I swear!"
})
