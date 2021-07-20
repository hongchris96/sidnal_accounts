class ChangeAccountPhoneType < ActiveRecord::Migration[5.2]
  def change
    remove_column :accounts, :phone, :integer
    add_column :accounts, :phone, :bigint
  end
end
