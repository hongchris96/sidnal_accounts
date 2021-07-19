class RemoveForeignKeys < ActiveRecord::Migration[5.2]
  def change
    remove_column :accounts, :tag_id, :integer
    remove_column :tags, :account_id, :integer
  end
end
