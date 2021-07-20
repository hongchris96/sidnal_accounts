class AddTagColumnToAcc < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :tags, :text, array: true, default: []
  end
end
