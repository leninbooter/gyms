"""Add custom models

Revision ID: 1905759bf9f0
Revises: 1a31ce608336
Create Date: 2025-01-14 23:10:51.052023

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '1905759bf9f0'
down_revision = '1a31ce608336'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('attributes',
    sa.Column('name', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('country',
    sa.Column('name', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('glossary',
    sa.Column('key', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('glossarytranslation',
    sa.Column('key', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('locale', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('value', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('city',
    sa.Column('name', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('country_id', sa.Uuid(), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('gym',
    sa.Column('name', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=False),
    sa.Column('longitude', sa.Float(), nullable=False),
    sa.Column('address', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('city', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('state', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('zip_code', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('country', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('phone', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
    sa.Column('city_id', sa.Uuid(), nullable=False),
    sa.Column('id', sa.Uuid(), nullable=False),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('gymattributeslink',
    sa.Column('gym_id', sa.Uuid(), nullable=False),
    sa.Column('attribute_id', sa.Uuid(), nullable=False),
    sa.ForeignKeyConstraint(['attribute_id'], ['attributes.id'], ),
    sa.ForeignKeyConstraint(['gym_id'], ['gym.id'], ),
    sa.PrimaryKeyConstraint('gym_id', 'attribute_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('gymattributeslink')
    op.drop_table('gym')
    op.drop_table('city')
    op.drop_table('glossarytranslation')
    op.drop_table('glossary')
    op.drop_table('country')
    op.drop_table('attributes')
    # ### end Alembic commands ###
