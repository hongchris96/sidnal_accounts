class CreateAccountTags < ActiveRecord::Migration[5.2]
  def change
    create_table :account_tags do |t|
      t.integer :account_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
