/**
 * An EarningRecord represents one year of Social Security earning data.
 * @constructor
 */
function EarningRecord() {
  this.year = -1;
  this.taxedEarnings = -1;
  this.taxedMedicareEarnings = -1;

  this.earningsCap = -1;
  this.indexFactor = -1;
  this.isTopEarningsYear = null;
  this.credits = 0;
}

/**
 * Computes the indexed earnings for this tax record.
 * @return {number}
 */
EarningRecord.prototype.indexedEarning = function() {
  let cappedEarning = Math.min(this.earningsCap, this.taxedEarnings);
  return Math.round(100 * cappedEarning * this.indexFactor) / 100;
};
export {EarningRecord};
