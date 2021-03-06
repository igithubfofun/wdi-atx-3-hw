# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160114020425) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name",      null: false
    t.text   "photo_url"
  end

  add_index "characters", ["name"], name: "index_characters_on_name", using: :btree

  create_table "movies", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "year"
    t.text     "poster_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "movies", ["title"], name: "index_movies_on_title", using: :btree

  create_table "trailers", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "year"
    t.text     "poster_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "trailers", ["title"], name: "index_trailers_on_title", using: :btree

end
