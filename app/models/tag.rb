class Tag < ApplicationRecord
  validates :tag_name, presence: true, uniqueness: true

  has_many :account_tags_joins,
    foreign_key: :tag_id,
    class_name: :AccountTag

  has_many :tagged_accounts,
    through: :account_tags_joins,
    source: :accounts
end
