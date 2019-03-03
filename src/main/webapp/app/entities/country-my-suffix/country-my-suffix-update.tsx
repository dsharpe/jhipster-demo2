import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IRegionMySuffix } from 'app/shared/model/region-my-suffix.model';
import { getEntities as getRegions } from 'app/entities/region-my-suffix/region-my-suffix.reducer';
import { getEntity, updateEntity, createEntity, reset } from './country-my-suffix.reducer';
import { ICountryMySuffix } from 'app/shared/model/country-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICountryMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ICountryMySuffixUpdateState {
  isNew: boolean;
  regionId: string;
}

export class CountryMySuffixUpdate extends React.Component<ICountryMySuffixUpdateProps, ICountryMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      regionId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getRegions();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { countryEntity } = this.props;
      const entity = {
        ...countryEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/country-my-suffix');
  };

  render() {
    const { countryEntity, regions, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="demoApp.country.home.createOrEditLabel">Create or edit a Country</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : countryEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="country-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="countryNameLabel" for="countryName">
                    Country Name
                  </Label>
                  <AvField id="country-my-suffix-countryName" type="text" name="countryName" />
                </AvGroup>
                <AvGroup>
                  <Label for="region.id">Region</Label>
                  <AvInput id="country-my-suffix-region" type="select" className="form-control" name="region.id">
                    <option value="" key="0" />
                    {regions
                      ? regions.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/country-my-suffix" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  regions: storeState.region.entities,
  countryEntity: storeState.country.entity,
  loading: storeState.country.loading,
  updating: storeState.country.updating,
  updateSuccess: storeState.country.updateSuccess
});

const mapDispatchToProps = {
  getRegions,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryMySuffixUpdate);
