class AddForeignKeyToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :tag_id, :integer
  end
end
