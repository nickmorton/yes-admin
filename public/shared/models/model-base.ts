export interface IModelBase {
	_id: string;
};

export interface IValidationRules {
	propertyName: string;
};

export interface IValidator<TEntity extends IModelBase> {
	rules: Array<IValidationRules>;
	validate(entity: TEntity): boolean;
};

export abstract class ValidatorBase<TEntity extends IModelBase> implements IValidator<TEntity> {
	public rules: Array<IValidationRules>;
	public validate(entity: TEntity): boolean {
		// TODO: Apply them rules!
		return true;
	};
}
