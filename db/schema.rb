# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180412190118) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "post"
    t.string "posted_by"
    t.bigint "mixtape_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mixtape_id"], name: "index_comments_on_mixtape_id"
  end

  create_table "mixtapes", force: :cascade do |t|
    t.string "title"
    t.string "created_by"
    t.string "created_for"
    t.string "dedication"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "player_url"
  end

  create_table "songs", force: :cascade do |t|
    t.string "artist"
    t.string "title"
    t.float "length"
    t.bigint "mixtape_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "track"
    t.index ["mixtape_id"], name: "index_songs_on_mixtape_id"
  end

  add_foreign_key "comments", "mixtapes"
  add_foreign_key "songs", "mixtapes"
end
