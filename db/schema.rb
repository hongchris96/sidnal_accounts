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

ActiveRecord::Schema.define(version: 2021_07_20_015834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_tags", force: :cascade do |t|
    t.integer "account_id"
    t.integer "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "accounts", force: :cascade do |t|
    t.string "acc_id"
    t.string "balance"
    t.integer "credit"
    t.string "picture"
    t.string "name_first"
    t.string "name_last"
    t.string "employer"
    t.string "email"
    t.string "address"
    t.string "comments"
    t.string "created"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "tags", default: [], array: true
    t.bigint "phone"
    t.index ["acc_id"], name: "index_accounts_on_acc_id", unique: true
    t.index ["email"], name: "index_accounts_on_email", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
